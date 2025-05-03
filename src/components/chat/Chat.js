import { useState, useEffect } from "react";
import { predefinedAnswers } from "../../services/predefinedAnswers";
import { askAI } from "../../services/aiService";
import '../chat/Chat.css';

// Função para calcular a similaridade
const getSimilarity = (str1, str2) => {
  const words1 = str1.toLowerCase().split(' ');
  const words2 = str2.toLowerCase().split(' ');

  let commonWords = 0;
  words1.forEach(word => {
    if (words2.includes(word)) commonWords++;
  });

  const totalWords = Math.max(words1.length, words2.length);
  return commonWords / totalWords;
};

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const initialMessage = { sender: "bot", text: "Olá! Como posso ajudar você hoje?" };
    setMessages([initialMessage]);
  }, []);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMessage = { sender: "user", text: input };
    setMessages(prev => [...prev, userMessage]);

    const lowerInput = input.toLowerCase();
    let botResponse = "";

    for (let question in predefinedAnswers) {
      const similarity = getSimilarity(lowerInput, question);
      if (similarity > 0.6) {
        botResponse = predefinedAnswers[question];
        break;
      }
    }

    setLoading(true);

    // Se não encontrar uma resposta predefinida, chama a IA
    if (!botResponse) {
      try {
        botResponse = await askAI(input);
      } catch (error) {
        console.error(error);
        botResponse = "Desculpe, tive um problema ao tentar responder. 😔";
      }
    }

    const botMessage = { sender: "bot", text: botResponse };
    setMessages(prev => [...prev, botMessage]);
    setInput("");
    setLoading(false);
  };

  return (
    <div className="chat-container">
      <div className="logo-chat">
        <img
          src="/assets/logofuria.png"
          alt="Logo FURIA"
        />
      </div>
      <div className="chat-box">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            <strong>{msg.sender === "user" ? "Você" : "FúriaBot"}:</strong> {msg.text}
          </div>
        ))}
        {loading && (
          <div className="message-bot">
            <strong>FúriaBot:</strong> Digitando...
          </div>
        )}
      </div>
      <div className="input-area">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && sendMessage()}
          placeholder="Digite sua pergunta..."
          disabled={loading}
          className="input-field"
        />
        <button onClick={sendMessage} disabled={loading} className="send-button">
          {loading ? "Aguardando..." : "Enviar"}
        </button>
      </div>
    </div>
  );
}
