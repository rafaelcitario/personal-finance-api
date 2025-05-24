# Personal Finance API

Projeto de estudo para entrada e saida de movimentações financeiras.

## escopo

API de Finanas Pessoais -
Entradas/sadas com categorias e filtros -
Autenticao, exportao CSV -
Setores: Fintechs, SaaS, consultorias

## routes

### Login -

Método Rota Ação
POST /login Realiza login

### Incomes -

Método Rota Ação
POST /transactions/incomes Criar entrada
GET /transactions/incomes Listar entradas
GET /transactions/income/:id Detalhar entrada
PUT /transactions/income/:id Atualizar entrada
DELETE /transactions/income/:id Remover entrada
