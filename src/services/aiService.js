export async function askAI(question) {
  const apiKey = process.env.REACT_APP_OPENROUTER_API_KEY;
  const endpoint = 'https://openrouter.ai/api/v1/chat/completions';

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'openai/gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: 'Você é um assistente especializado na FURIA, uma organização de esports, com foco no cenário de Counter-Strike (CS:GO e CS2). Responda SOMENTE com texto claro em português. NÃO retorne código ou markdown. Não inclua blocos de código.'
        },
        { role: 'user', content: question }
      ]
    }),
  });

  if (!response.ok) {
    if (response.status === 429) {
      throw new Error('Muitas requisições para a IA. Tente novamente em instantes.');
    } else {
      const errorText = await response.text();
      throw new Error('Erro ao chamar a IA: ' + errorText);
    }
  }

  const data = await response.json();
  let answer = data.choices[0].message.content;

  answer = answer.replace(/\\boxed{(.*?)}/g, '$1');
  answer = answer.replace(/\\|box/g, '');
  answer = answer.replace(/```json\s*(.*?)```/gs, '$1');
  answer = answer.replace(/```[\s\S]*?```/g, '');

  return answer;
}
