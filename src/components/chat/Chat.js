import { useState, useEffect } from "react";
import { predefinedAnswers } from "../../services/predefinedAnswers";
import { askAI } from "../../services/aiService";
import "../chat/Chat.scss";

const getSimilarity = (str1, str2) => {
  const words1 = str1.toLowerCase().split(" ");
  const words2 = str2.toLowerCase().split(" ");

  let commonWords = 0;
  words1.forEach((word) => {
    if (words2.includes(word)) commonWords++;
  });

  const totalWords = Math.max(words1.length, words2.length);
  return commonWords / totalWords;
};

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const suggestions = [
    "Quais são os benefícios de ser torcedor?",
    "Como posso comprar produtos oficiais?",
    "Qual o calendário dos próximos jogos?",
    "Onde posso acompanhar as lives?",
    "Como faço para entrar em contato com o suporte?",
  ];

  useEffect(() => {
    const initialMessage = {
      sender: "bot",
      text: "Olá! Como posso ajudar você hoje?",
    };
    setMessages([initialMessage]);

    const chatBox = document.querySelector('.messages-container');
    if (chatBox) chatBox.scrollTop = chatBox.scrollHeight;
  }, []);

  useEffect(() => {
    const chatBox = document.querySelector('.messages-container');
    if (chatBox) chatBox.scrollTop = chatBox.scrollHeight;
  }, [messages]);

  const sendMessage = async (customMessage) => {
    if ((!input.trim() && !customMessage) || loading) return;

    const messageToSend = customMessage || input;

    const userMessage = { sender: "user", text: messageToSend };
    setMessages((prev) => [...prev, userMessage]);

    const lowerInput = messageToSend.toLowerCase();
    let botResponse = "";

    for (let question in predefinedAnswers) {
      const similarity = getSimilarity(lowerInput, question);
      if (similarity > 0.6) {
        botResponse = predefinedAnswers[question];
        break;
      }
    }

    setLoading(true);
    setInput("");

    if (!botResponse) {
      try {
        botResponse = await askAI(messageToSend);
      } catch (error) {
        console.error(error);
        botResponse = "Desculpe, tive um problema ao tentar responder. 😔";
      }
    }

    const botMessage = { sender: "bot", text: botResponse };
    setMessages((prev) => [...prev, botMessage]);
    setLoading(false);
  };

  return (
    <div className="chat-app">
      <header className="chat-header">
        <div className="logo-box">
          <img
            src={process.env.PUBLIC_URL + "/assets/logofuria.png"}
            alt="Logo FURIA"
            className="logo"
          />
          <h1>FúriaBot</h1>
        </div>

        <a href="/" className="close-btn">
          ×
        </a>

        <p>Como posso te ajudar hoje?</p>
      </header>


      <div className="suggestions-container">
        <p className="suggestions-title">Perguntas frequentes:</p>
        <div className="suggestions-grid">
          {suggestions.map((suggestion, idx) => (
            <button
              key={idx}
              className="suggestion-btn"
              onClick={() => sendMessage(suggestion)}
              disabled={loading}
            >
              {suggestion}
            </button>
          ))}
        </div>
      </div>

      <div className="messages-container">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            <div className="message-content">
              <div className="message-sender">
                {msg.sender === "user" ? "Você" : "FúriaBot"}
              </div>
              <div className="message-text">{msg.text}</div>
            </div>
            <div className="message-time">
              {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </div>
          </div>
        ))}
        {loading && (
          <div className="message bot">
            <div className="message-content">
              <div className="message-sender">FúriaBot</div>
              <div className="message-text typing-indicator">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Digite sua mensagem..."
          disabled={loading}
          className="chat-input"
        />
        <button
          onClick={() => sendMessage()}
          disabled={loading || !input.trim()}
          className="send-btn"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
          </svg>
        </button>
      </div>
    </div>
  );
}