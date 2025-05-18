# ChatBot FURIA

Este é um chatbot especializado na organização de esports **FURIA**, desenvolvido com React. Ele foi integrado ao **chat-gpt turbo**, uma plataforma de IA, para responder perguntas que não estão no banco de dados de perguntas frequentes já criadas. O chatbot tem como foco responder perguntas relacionadas ao cenário da FURIA, seus jogadores e eventos, proporcionando uma experiência interativa e personalizada para fãs da organização.

---

## Funcionalidades

- ✅ Respostas instantâneas sobre a **FURIA**, baseadas em um banco de perguntas frequentes.
- 🧠 Caso a pergunta não esteja no banco, o chatbot utiliza a **integração com o DeepSeek** para buscar e construir respostas inteligentes.
- 🎯 Foco no cenário competitivo de **Counter-Strike (CS:GO e CS2)** e jogadores da FURIA.

---

## O que você pode perguntar?

Você pode perguntar praticamente **tudo sobre a FURIA no CS**, como por exemplo:

- 🧑‍🤝‍🧑 *Quem são os jogadores atuais da line principal da FURIA?*  
- 🏆 *Quais títulos a FURIA já venceu no CS:GO e CS2?*  
- 🎮 *Quando será o próximo campeonato com participação da FURIA?*  
- 🔄 *Houve alguma mudança recente na lineup?*  
- 📈 *Qual a posição da FURIA no ranking mundial atualmente?*  
- 🔫 *Qual o mapa preferido da FURIA?*  
- 👑 *Qual jogador da FURIA tem mais MVPs?*  
- 🎥 *Onde posso assistir os jogos da FURIA ao vivo?*  
- 🧠 *Qual o estilo de jogo tático da FURIA no CS2?*

E muito mais. Se é sobre a FURIA no CS, **o bot responde.**

---

## Tecnologias Usadas

- **React** – Interface do usuário dinâmica e responsiva.
- **DeepSeek** – Inteligência artificial para respostas fora do banco de dados.
- **ChatGPT Turbo** – Modelo de IA usado para gerar respostas personalizadas.
- **Fetch API** – Comunicação HTTP com o backend de IA.
- **Git** – Controle de versionamento do projeto.

---

## Como rodar o projeto

### 1. Clonando o repositório

```bash
git clone https://github.com/DvdMeneses/chat-bot.git
```

### 2. Instalando as dependências

```bash
cd chat-bot
npm install
```

### 3. Configurando a chave da API

No arquivo `furia-bot/src/services/aiService.js`, adicione sua chave da API DeepSeek na **linha 2**.

A chave está na descrição do vídeo no YouTube.

### 4. Rodando o projeto

```bash
npm start
```

Acesse o app em: [http://localhost:5000](http://localhost:5000)

Ou no site https://chat-bot-kohl-theta.vercel.app
