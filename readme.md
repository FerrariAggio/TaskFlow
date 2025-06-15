# Boilerplate MVC em Node.js com PostgreSQL

Este projeto é um boilerplate básico para uma aplicação Node.js seguindo o padrão MVC (Model-View-Controller), utilizando PostgreSQL como banco de dados.

## Requisitos

- Node.js
- PostgreSQL

## Instalação

1. **Clonar o repositório:**
   Insira o código abaixo no terminal do seu vscode alterando os campos necessário

```bash
   git clone https://github.com/seu-usuario/seu-projeto.git
   cd seu-projeto
```

2. **Instalar as dependências:**
   Insira o código abaixo no terminal do vscode para baixar as dependências necessárias

```bash
npm install
```

## Iniciando a aplicação

1. **Iniciar a aplicação**
   Insira o código abaixo no terminal do vscode para iniciar a aplicação

```bash
npm start
```

Verifique se a seguinte mensagem está aparecendo no terminal:

```javascript
Conectado ao banco de dados PostgreSQL
Servidor rodando na porta 3000
```

Caso aparece uma mensagem de erro tente repetir os passos

Após o servidor estar conectado e rodando na porta 3000, acesse o seguinte link no navegador

`http://localhost:3000/`

## Funcionalidades

- **Padrão MVC:** Estrutura organizada em Model, View e Controller.
- **PostgreSQL:** Banco de dados relacional utilizado para persistência dos dados.
- **Scripts com `nodemon`:** Utilização do `nodemon` para reiniciar automaticamente o servidor após alterações no código.
- **Testes:** Inclui estrutura básica para testes automatizados.

## Scripts Disponíveis

- `npm start`: Inicia o servidor Node.js.
- `npm run dev`: Inicia o servidor com `nodemon`, reiniciando automaticamente após alterações no código.
- `npm run test`: Executa os testes automatizados.
- `npm run test:coverage`: Executa os testes e gera um relatório de cobertura de código.

## Estrutura de Diretórios

- **`config/`**: Configurações do banco de dados e outras configurações do projeto.
- **`controllers/`**: Controladores da aplicação (lógica de negócio).
- **`models/`**: Modelos da aplicação (definições de dados e interações com o banco de dados).
- **`routes/`**: Rotas da aplicação.
- **`tests/`**: Testes automatizados.
- **`views/`**: Views da aplicação (se aplicável).

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir um issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a Licença MIT.

Este README.md fornece uma visão geral clara do boilerplate, incluindo instruções de instalação, configuração do banco de dados, funcionalidades principais, scripts disponíveis, estrutura de diretórios, como contribuir e informações de licença. Certifique-se de personalizar as seções com detalhes específicos do seu projeto conforme necessário.

```

```
