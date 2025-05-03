
# ChatBot FURIA

Este é um chatbot especializado na organização de esports FURIA, desenvolvido com React. Ele foi integrado ao DeepSeek, uma plataforma de IA, para responder perguntas que não estão no banco de dados de perguntas frequentes já criadas. O chatbot tem como foco responder perguntas relacionadas ao cenário da FURIA, seus jogadores e eventos, proporcionando uma experiência interativa e especializada.

## Funcionalidades

- Respostas rápidas sobre a FURIA, com base no banco de perguntas frequentes.
- Caso a pergunta não esteja no banco, o chatbot utiliza a integração com o DeepSeek para buscar respostas.
- Focado no cenário de Counter-Strike (CS:GO e CS2) e jogadores da FURIA.

## Tecnologias Usadas

- **React**: Framework JavaScript para construção da interface do usuário.
- **DeepSeek**: Plataforma de IA para responder perguntas que 
- **Fetch API**: Para fazer requisições HTTP ao DeepSeek.

## Como rodar o projeto

Para rodar este projeto localmente, siga os passos abaixo.

### 1. Clonando o repositório

Primeiro, clone o repositório para sua máquina local:

```bash
git clone https://github.com/DvdMeneses/chat-bot.git
```

### 2. Instalando as dependências

Dentro da pasta do projeto, instale as dependências necessárias usando o seguinte comando:

```bash
cd chat-bot
npm install
```

### 3. Configurando a chave da API

Para integrar o chatbot com o DeepSeek, você precisará configurar sua chave de API.Na linha 2 do arquivo `furia-bot\src\services\aiService.js` adicione a key que eu coloquei na descrição do video no yt.

A chave de API será usada no arquivo `iaService.js` para fazer a comunicação com o DeepSeek.

### 4. Rodando o projeto

Após a configuração, execute o projeto em modo de desenvolvimento com o seguinte comando:

```bash
npm start
```

O aplicativo estará disponível em [http://localhost:5000](http://localhost:5000).

