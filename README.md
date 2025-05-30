# Personal Finance API

![Version](https://img.shields.io/badge/version-v0.10.5-blue)
![Node.js](https://img.shields.io/badge/Node.js-v22.15.1+-green)
![TypeScript](https://img.shields.io/badge/TypeScript-v5.8.3+-blue)
![Prisma](https://img.shields.io/badge/Prisma-ORM-brightgreen)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16+-blue)

API para gerenciamento de finanças pessoais com autenticação JWT, registro de usuários e gerenciamento de tokens.

## 🌟 Visão Geral

API desenvolvida para estudo e prática, com foco em autenticação segura usando JWT e refresh tokens. Implementa boas práticas de desenvolvimento como validação de dados, tipagem estática e arquitetura limpa.

**Principais recursos:**

- ✅ Autenticação segura com JWT
- 🔄️ Sistema de refresh tokens
- 🔒 Validação de payloads com Zod
- 🏗️ Arquitetura em camadas (controller-service-repository)
- 📦 Prisma como ORM para PostgreSQL

## 💻 Tecnologias

**Stack principal:**

- Node.js v22+
- Express
- TypeScript
- Prisma (ORM)
- PostgreSQL
- JWT (autenticação)
- Zod (validação)

**Dependências principais:**

- `express`: Framework web
- `jsonwebtoken`: Implementação JWT
- `zod`: Validação de dados
- `@prisma/client`: ORM para PostgreSQL
- `dotenv`: Gerenciamento de variáveis de ambiente

**Dev Dependencies:**

- TypeScript
- ESLint (linting)
- Nodemon (hot reload)
- ts-node (execução TS)
- Prisma CLI

## 📦 Instalação

1. Clone o repositório:

```bash
git clone https://github.com/rafaelcitario/personal-finance-api.git
```

2. Instale as dependências:

```bash
npm install
```

3. Configure o banco de dados:

```bash
npx prisma migrate dev
```

4. Configure as variáveis de ambiente (veja a seção abaixo)

5. Inicie o servidor:

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
JWT_REFRESH_SECRET=sua_chave_secreta_refresh
DATABASE_URL=postgresql://user:password@localhost:5432/dbname
```

## 📂 Estrutura do Projeto (Atualizada)

```bash
src/
├── @types/            # Definições de tipos extendidos
├── DTOs/              # Objetos de transferência de dados
├── env/               # Configurações de ambiente
├── http/              # Camada HTTP
│   ├── controllers/   # Lógica dos endpoints (auth)
│   ├── middlewares/   # Middlewares (JWT, validação)
│   └── routes/        # Definição de rotas
├── interfaces/        # Tipos e interfaces
├── repositories/      # Camada de acesso a dados
├── services/          # Lógica de negócios
└── server.ts          # Ponto de entrada
```

## 🛣️ Rotas da API (Atualizadas)

### Autenticação

| Método | Rota        | Descrição                          |
|--------|-------------|------------------------------------|
| POST   | `/login`    | Login de usuário (gera JWT)        |
| POST   | `/register` | Registro de novo usuário           |
| POST   | `/token`    | Gera novo access token com refresh |

### Middlewares Implementados

1. **authPayload.middleware**: Valida payloads de autenticação
2. **jwtToken.middleware**: Verifica e valida tokens JWT

## 🔧 Variáveis de Ambiente (Atualizadas)

| Variável            | Tipo     | Descrição                              | Obrigatório |
|---------------------|----------|----------------------------------------|-------------|
| NODE_ENV            | string   | Ambiente de execução                   | Sim         |
| SERVER_HOST         | string   | Host do servidor                       | Não         |
| SERVER_PORT         | number   | Porta do servidor                      | Sim         |
| JWT_SECRET          | string   | Chave secreta para JWT                 | Sim         |
| JWT_REFRESH_SECRET  | string   | Chave secreta para refresh tokens      | Sim         |
| DATABASE_URL        | string   | URL de conexão com o PostgreSQL        | Sim         |

## 🛠️ Scripts Úteis

```bash
npm run dev          # Inicia servidor em desenvolvimento
npm start            # Inicia servidor em produção
npm run lint         # Executa análise estática do código
npm run lint:fix     # Corrige problemas de linting
npm run prisma:migrate  # Executa migrações do banco
npm run prisma:generate # Gera client do Prisma
```

## 📜 Changelog (Atualizado)

### v0.10.5 (Atual)

- Implementação completa de CRUD para transações
- Mudança de campo "valor" para "amount" no banco
- Melhorias na validação de payloads

### v0.9.5

- Implementação inicial de transações (POST)
- Formatação de valores monetários
- Validação de tipos de transação

### v0.8.4

- Implementação completa das rotas de login, registro e token
- Geração de JWT e refresh tokens
- Middlewares de validação

### v0.7.0 - v0.7.4

- Correções no fluxo de registro
- Validação de senha
- Conexão com banco de dados Prisma

### v0.6.0

- Implementação inicial de JWT

### v0.4.0 - v0.5.0

- Middleware de autenticação
- Feature de registro de usuários

## 📄 Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes
