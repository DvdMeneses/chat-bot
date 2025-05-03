export async function askAI(question) {
  const apiKey = ''; // token que eu deixei na descrição do video.
  const endpoint = 'https://openrouter.ai/api/v1/chat/completions';

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'deepseek/deepseek-r1-zero:free',
      messages: [
        {
          role: 'system',
          content: 'Você é um assistente especializado na FURIA, uma organização de esports, com foco no cenário de Counter-Strike (CS:GO e CS2). Responda somente perguntas sobre a FURIA e seus jogadores. Sempre forneça respostas claras, diretas e objetivas em português do Brasil. Caso a pergunta não seja sobre a FURIA, responda que você só pode falar sobre a FURIA e seus jogadores. Não forneça informações irrelevantes ou fora do contexto.',
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

  return answer;
}
