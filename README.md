# Sistema de Gestão Agropecuária

Sistema completo para gestão de propriedades rurais, desenvolvido com tecnologias modernas em uma arquitetura monorepo.

## 🚠 Guia para Colaboradores no Windows – Sistema de Gestão Agropecuária

### Pré-requisitos

1. Git
2. Node.js 18+
3. npm ou yarn
4. Docker (opcional, para desenvolvimento local)

> Guia completo para configurar o ambiente local com Git, SSH e clonar o repositório usando Windows

## 🔒 1. Gerar chave SSH exclusiva para este projeto

1. Abra o **Git Bash** (Menu Iniciar > digite "Git Bash") - Note que GitBash não é o padrão de terminal do Visual Studio Code. Ao abrir o terminal integrado, no canto superior direito clique no > que esta com a concavidade para cima e selecione o Git Bash.
2. Execute:

```bash
ssh-keygen -t ed25519 -C "seu-email@exemplo.com" -f ~/.ssh/id_ed25519_agro
```

3. Quando solicitado:
   - Pressione `Enter` para aceitar o local sugerido
   - Pode deixar a senha em branco

---

## 🔐 2. Adicionar a chave SSH no GitHub

1. Execute:

```bash
cat ~/.ssh/id_ed25519_agro.pub
```

2. Copie o conteúdo exibido
3. Acesse [https://github.com/settings/keys](https://github.com/settings/keys)
4. Clique em **"New SSH key"**
   - Title: `Chave Agro`
   - Key: cole o conteúdo copiado
5. Clique em **Add SSH key**

---

## ⚖️ 3. Configurar o SSH para o projeto

1. Execute no Git Bash:

```bash
mkdir -p ~/.ssh
```

2. Execute no Git Bash: (Precisamos garantir que o arquivo não tenha extensão .txt, verifique isso em user/.ssh, a pasta é oculta)

```bash
mv ~/.ssh/config.txt ~/.ssh/config
```

3. Execute no Git Bash:

```bash
notepad ~/.ssh/config
```

4. Adicione:

```
Host github-agro
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_ed25519_agro
  IdentitiesOnly yes
```

5. Salve e feche

---

## ✅ 4. Testar a conexão SSH

```bash
ssh -T git@github-agro
```

Se aparecer:

```
Hi NOME! You've successfully authenticated, but GitHub does not provide shell access.
```

✔️ Tudo certo!

---

## 📂 5. Clonar o repositório

Execute no Git Bash:

```bash
# 1. Clonar o repositório
git clone git@github-agro:MarceloDChagas/Sistema-de-gestao-agropecuaria.git
cd Sistema-de-gestao-agropecuaria

```

---

## 🚀 6. Instalar dependências e rodar

```bash

# 2. Instalar dependências
npm install

# 3. Configurar banco de dados (COM DOCKER - RECOMENDADO)
# - Certifique-se de que o Docker está instalado e rodando
# - Execute o script de configuração:
scripts\docker-setup.bat

# OU configuração manual:
# - Instalar PostgreSQL
# - Criar banco 'gestao_agropecuaria'
# - Criar arquivo .env no backend com DATABASE_URL

# 4. Configurar Prisma
cd apps/backend
npx prisma generate
npx prisma migrate dev

# 5. Voltar para raiz e rodar
cd ../..
npm run dev
```

---

## 🚧 7. Fluxo de trabalho

### Atualizar o projeto:

```bash
git pull origin main
```

### Criar uma branch:

```bash
git checkout -b feat/minha-feature
```

### Commitar:

Antes de commitar, consulte o seguinte artigo: https://medium.com/linkapi-solutions/conventional-commits-pattern-3778d1a1e657

```bash
git add .
git commit -m "feat: descricao da feature"
```

### Subir para o GitHub:

```bash
git push origin feat/minha-feature
```

### Abrir Pull Request

- Acesse o repositório no GitHub e clique em "Compare & pull request"

---

## ⬆️ Boas práticas

- Sempre use branches (nunca commit direto na main)
- Use mensagens de commit claras (`feat`, `fix`, `refactor`, etc.)
- Sempre faca mudancas pequenas

---

## 🏗️ Estrutura do Projeto

```
sistema-de-gestao-agropecuaria/
├── apps/                    # Aplicações principais
│   ├── frontend/           # Aplicação Next.js (Frontend)
│   │   ├── src/
│   │   │   ├── app/       # Páginas da aplicação
│   │   │   │   ├── layout.tsx
│   │   │   │   ├── page.tsx
│   │   │   │   └── globals.css
│   │   │   ├── components/# Componentes reutilizáveis
│   │   │   │   ├── auth/
│   │   │   │   └── layout/
│   │   │   ├── lib/       # Utilitários e configurações
│   │   │   └── types/     # Definições de tipos
│   │   └── public/        # Arquivos estáticos
│   │
│   └── backend/           # API NestJS (Backend)
│       ├── src/
│       │   ├── auth/      # Autenticação
│       │   │   ├── guards/
│       │   │   ├── strategies/
│       │   │   ├── auth.controller.ts
│       │   │   ├── auth.module.ts
│       │   │   └── auth.service.ts
│       │   ├── prisma/    # Configuração do banco
│       │   │   ├── prisma.module.ts
│       │   │   └── prisma.service.ts
│       │   ├── users/     # Gerenciamento de usuários
│       │   │   ├── users.controller.ts
│       │   │   ├── users.module.ts
│       │   │   └── users.service.ts
│       │   ├── app.module.ts
│       │   └── main.ts
│       └── prisma/        # Schema do Prisma
│           └── schema.prisma
│
├── shared/                # Código compartilhado
│   ├── types/            # Tipos compartilhados
│   ├── utils/            # Utilitários compartilhados
│   └── enum/        # Enums compartilhadas
│
├── .husky/               # Git Hooks
├── .eslintrc.json        # Configuração do ESLint
├── .prettierrc           # Configuração do Prettier
├── package.json          # Configuração principal
└── tsconfig.json         # Configuração base do TypeScript
```

## 📦 Tecnologias Principais

### Frontend

- **Next.js 13+**: Framework React com App Router
- **TypeScript**: Superset JavaScript com tipagem estática
- **Tailwind CSS**: Framework CSS utilitário
- **React Query**: Gerenciamento de estado e cache
- **Zod**: Validação de dados

### Backend

- **NestJS**: Framework Node.js
- **Prisma**: ORM para banco de dados
- **PostgreSQL**: Banco de dados
- **JWT**: Autenticação
- **Swagger**: Documentação da API

### Ferramentas de Desenvolvimento

- **ESLint**: Linter
- **Prettier**: Formatador de código
- **Husky**: Git hooks
- **TypeScript**: Tipagem estática
- **Turborepo**: Gerenciador de monorepo

## 🛠️ Configurações

### ESLint (.eslintrc.json)

Configuração do linter para garantir qualidade e consistência do código:

- Suporte a TypeScript
- Regras específicas para React
- Integração com Prettier
- Configurações para ambiente Node.js e Browser

### Prettier (.prettierrc)

Configurações de formatação de código:

- Aspas simples
- Ponto e vírgula obrigatório
- Largura máxima de 80 caracteres
- 2 espaços para indentação

### Husky (.husky/)

Git hooks para automatizar tarefas:

- `pre-commit`: Executa lint-staged antes de cada commit
- Garante que o código está formatado e sem erros

### Turborepo (turbo.json)

Configuração do pipeline de build:

- Cache de builds
- Dependências entre pacotes
- Configurações de desenvolvimento
- Otimizações de performance

## 🚀 Scripts Disponíveis

```bash
# Instalação
npm install

# Desenvolvimento
npm run dev           # Inicia frontend e backend
npm run dev:frontend  # Apenas frontend
npm run dev:backend   # Apenas backend

# Linting e Formatação
npm run lint         # Executa ESLint
npm run format       # Executa Prettier

# Setup completo
npm run setup        # Instala dependências, formata e inicia
```

## 📝 Convenções de Código

### Frontend

- Use TypeScript para todos os arquivos
- Componentes funcionais com hooks
- Estilização com Tailwind CSS
- Documentação com JSDoc
- Testes com Jest e React Testing Library

### Backend

- Arquitetura modular com NestJS
- DTOs para validação de dados
- Documentação com Swagger
- Testes com Jest
- Migrations com Prisma

## 🔧 Configuração do Ambiente

### Banco de Dados com Docker (Recomendado)

Para facilitar a configuração, o projeto inclui suporte completo ao Docker:

#### Configuração Rápida:

```bash
# Execute o script de configuração (Windows)
scripts\docker-setup.bat

# Ou no Linux/Mac
chmod +x scripts/docker-setup.sh
./scripts/docker-setup.sh
```

#### Configuração Manual:

```bash
# Iniciar containers
docker-compose up -d

# Executar migrações
cd apps/backend
npx prisma migrate dev
```

#### Acesso ao Banco:

- **PostgreSQL:** localhost:5432
- **pgAdmin:** http://localhost:8080 (admin@agrosys.com / admin123)
- **Database:** gestao_agropecuaria

> 📖 Para mais detalhes, consulte [README-DOCKER.md](README-DOCKER.md)

### Backend

1. Configure o banco de dados:

```bash
cd apps/backend
npx prisma migrate dev
```

2. Inicie o servidor:

```bash
npm run dev
```

3. Acesse a documentação Swagger:

```
http://localhost:3000/api
```

### Frontend

1. Configure as variáveis de ambiente
2. Inicie o servidor:

```bash
cd apps/frontend
npm run dev
```

3. Acesse a aplicação:

```
http://localhost:5173
```

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'feat: add some amazing feature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença ISC. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
