# Backend Setup Guide

## Pré-requisitos

- Node.js (v18 ou superior)
- PostgreSQL
- npm ou yarn

## Configuração do Banco de Dados

1. Crie um banco de dados PostgreSQL chamado `gestao_agropecuaria`
2. Copie o arquivo `.env.example` para `.env`:

```bash
cp .env.example .env
```

3. Configure a variável `DATABASE_URL` no arquivo `.env`:

```
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/gestao_agropecuaria?schema=public"
```

## Instalação e Configuração

1. Instale as dependências:

```bash
npm install
```

2. Gere o cliente Prisma:

```bash
npx prisma generate
```

3. Execute as migrações do banco de dados:

```bash
npx prisma migrate dev
```

## Rodando o Projeto

```bash
# Modo desenvolvimento
npm run start:dev

# Modo produção
npm run build
npm run start:prod
```

## Comandos Úteis

- `npx prisma studio` - Abre uma interface visual para gerenciar o banco de dados
- `npx prisma migrate reset` - Reseta o banco de dados (cuidado: apaga todos os dados)
- `npx prisma format` - Formata o arquivo schema.prisma
