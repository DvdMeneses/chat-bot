export async function askAI(question) {
  const apiKey = process.env.REACT_APP_OPENROUTER_API_KEY;
  const endpoint = 'https://openrouter.ai/api/v1/chat/completions';

  const systemMessage = `Você é um assistente especializado EXCLUSIVAMENTE na FURIA Esports, 
    focando no time de Counter-Strike (CS:GO/CS2). Regras estritas:
    1. Responda SOMENTE sobre FURIA e Counter-Strike
    2. Recuse educadamente perguntas sobre outros assuntos
    3. Formato: texto claro em português (sem códigos/markdown)
    4. Se não souber, diga "Não tenho informações sobre isso no contexto da FURIA/CS"`;

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'https://furia.com',
      },
      body: JSON.stringify({
        model: 'openai/gpt-3.5-turbo',
        temperature: 0.3,
        messages: [
          { role: 'system', content: systemMessage },
          { role: 'user', content: `[FURIA/CS ONLY] ${question}` }
        ]
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message ||
        `Erro ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    let answer = data.choices[0]?.message?.content || 'Sem resposta da IA';

    // Enhanced content cleaning
    const cleanPatterns = [
      /```[\s\S]*?```/g,       // Code blocks
      /\\boxed\{.*?\}/g,        // Boxed content
      /\[.*?\]\(.*?\)/g,       // Markdown links
      /\*\*.*?\*\*/g,           // Bold text
      /\*.*?\*/g                // Italics
    ];

    cleanPatterns.forEach(pattern => {
      answer = answer.replace(pattern, '');
    });

    if (answer.includes("não posso ajudar") ||
      answer.includes("não tenho informações")) {
      return "Desculpe, só posso responder sobre a FURIA e Counter-Strike.";
    }

    return answer.trim();

  } catch (error) {
    console.error('AI Error:', error);
    return `Erro ao consultar a IA: ${error.message}. Por favor, tente novamente.`;
  }
}