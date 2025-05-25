# Personal Finance API

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![Node.js](https://img.shields.io/badge/Node.js-18+-green)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8+-blue)

API para gerenciamento de finanças pessoais com autenticação, transações e exportação de dados.

## 🌟 Visão Geral

API desenvolvida para estudo e prática, com o objetivo de gerenciar transações financeiras pessoais, incluindo receitas e despesas com categorização. Oferece autenticação de usuários e capacidade de exportação de dados em CSV.

**Setores-alvo:**

- Fintechs
- SaaS (Software as a Service)
- Consultorias Financeiras

## 🚀 Funcionalidades

- ✅ Autenticação de usuários (JWT)
- 🔄️ CRUD completo para transações financeiras
- 🔄️ Categorização de transações
- 🔄️ Filtros avançados
- 🔄️ Exportação para CSV
- ✅ Validação de dados com Zod
- ✅ Tipagem estática com TypeScript

## 💻 Tecnologias

**Principais tecnologias:**

- Node.js
- Express
- TypeScript
- Zod (validação)
- Prisma (ORM)
- JWT (autenticação)

**Dependências de desenvolvimento:**

- ESLint (linting)
- Nodemon (hot reload)
- ts-node (execução TS)

## 📦 Instalação

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/personal-finance-api.git
```

2. Instale as dependências:

```bash
npm install
```

3. Configure as variáveis de ambiente (veja a seção abaixo)

4. Inicie o servidor:

```bash
npm run dev
```

## ⚙️ Configuração

Crie um arquivo `.env` na raiz do projeto baseado no `.env.example`:

```env
NODE_ENV=development
SERVER_HOST=localhost
SERVER_PORT=8000
JWT_SECRET=sua_chave_secreta_aqui
DATABASE_URL=postgresql://user:password@localhost:5432/dbname
```

## 📂 Estrutura do Projeto

```bash
src/
├── env/               # Configurações de ambiente
├── http/              # Camada HTTP
│   ├── controllers/   # Lógica dos endpoints
│   ├── middlewares/   # Middlewares
│   └── routes/        # Definição de rotas
├── interfaces/        # Tipos e interfaces
├── repositories/      # Camada de acesso a dados
├── services/          # Lógica de negócios
└── server.ts          # Ponto de entrada
```

## 🛣️ Rotas da API

### Autenticação

| Método | Rota        | Descrição               |
|--------|-------------|-------------------------|
| POST   | `/login`    | Login de usuário        |
| POST   | `/register` | Registro de novo usuário|

### Transações (Receitas)

| Método | Rota                          | Descrição                     |
|--------|--------------------------------|-------------------------------|
| POST   | `/transactions/incomes`        | Cria nova receita             |
| GET    | `/transactions/incomes`        | Lista todas receitas          |
| GET    | `/transactions/income/:id`     | Obtém detalhes de uma receita |
| PUT    | `/transactions/income/:id`     | Atualiza uma receita          |
| DELETE | `/transactions/income/:id`     | Remove uma receita            |

*(Documentação completa disponível no Postman/Swagger)*

## 🔧 Variáveis de Ambiente

| Variável      | Tipo     | Descrição                     | Padrão       |
|---------------|----------|-------------------------------|--------------|
| NODE_ENV      | string   | Ambiente de execução          | development  |
| SERVER_HOST   | string   | Host do servidor              | localhost    |
| SERVER_PORT   | number   | Porta do servidor             | 8000         |
| JWT_SECRET    | string   | Chave secreta para JWT        | -            |
| DATABASE_URL  | string   | URL de conexão com o banco    | -            |

## 🛠️ Scripts Úteis

```bash
npm run dev     # Inicia servidor em desenvolvimento
npm start       # Inicia servidor em produção
npm run lint    # Executa análise estática do código
npm run lint:fix # Corrige problemas de linting automaticamente
```

## 📜 Changelog

### v0.4.0 (Atual)

- Adicionado middleware de autenticação
- Melhorias no sistema de login

### v0.3.0

- Criadas rotas básicas (/transactions, /login, /register)

### v0.2.0

- Configurado servidor Express

### v0.1.0

- Implementada validação de variáveis de ambiente com Zod

## 📄 Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

### Melhorias adicionadas

1. **Badges** - Adicionei badges para versão, Node.js e TypeScript
2. **Índice** - Organizei o conteúdo em seções claras
3. **Seção de Tecnologias** - Destaquei as principais tecnologias
4. **Guia de Instalação** - Passo a passo completo
5. **Estrutura de Pastas** - Explicação detalhada
6. **Variáveis de Ambiente** - Tabela organizada
7. **Scripts Úteis** - Explicação dos comandos npm
8. **Changelog** - Histórico de versões baseado nos seus commits
9. **Licença** - Informação sobre licenciamento

Possíveis melhorias futuramente:

- Seção de "Contribuição" (se for open source)
- Link para documentação no Postman/Swagger
- Exemplos de requests/responses
- Testes automatizados (quando implementar)
- Status do CI/CD (quando configurar)
