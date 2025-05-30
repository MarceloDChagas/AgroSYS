# Sistema de Gestão Agropecuária

Sistema completo para gestão de propriedades rurais, desenvolvido com tecnologias modernas em uma arquitetura monorepo.

# 🚠 Guia para Colaboradores no Windows – Sistema de Gestão Agropecuária

## Pre requisitos

1. Git
2. Node.js e Npm
3. Docker

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

3. Adicione:

```
Host github-agro
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_ed25519_agro
  IdentitiesOnly yes
```

4. Salve e feche

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
git clone git@github-agro:MarceloDChagas/Sistema-de-gestao-agropecuaria.git
```

Depois:

```bash
cd Sistema-de-gestao-agropecuaria
```

---

## 🚀 6. Instalar dependências e rodar

```bash
npm run setup # instala tudo, formata o codigo, aplica o lint e roda o backend e o frontend em paralelo
npm run dev      # roda os dois
npm run dev:frontend ou npm run dev:backend # roda separadamente
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

### Antes de commitar, consulte o seguinte artigo: https://medium.com/linkapi-solutions/conventional-commits-pattern-3778d1a1e657

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
│   └── backend/            # API Node.js (Backend)
├── packages/               # Pacotes compartilhados
├── .husky/                # Configuração do Husky (Git Hooks)
├── .eslintrc.json         # Configuração do ESLint
├── .prettierrc            # Configuração do Prettier
├── package.json           # Configuração principal do projeto
├── turbo.json             # Configuração do Turborepo
└── tsconfig.json          # Configuração base do TypeScript
```

## 📦 Tecnologias Principais

- **Next.js**: Framework React para frontend
- **Node.js**: Runtime para backend
- **TypeScript**: Superset JavaScript com tipagem estática
- **Prisma**: ORM para banco de dados
- **Turborepo**: Gerenciador de monorepo
- **ESLint**: Linter para código JavaScript/TypeScript
- **Prettier**: Formatador de código
- **Husky**: Git hooks para garantir qualidade do código
- **lint-staged**: Executa linters em arquivos staged

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

## 🔧 Configuração do Ambiente

1. Clone o repositório
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Configure as variáveis de ambiente (se necessário)
4. Execute o setup:
   ```bash
   npm run setup
   ```

## 📝 Convenções de Código

- TypeScript para tipagem estática
- ESLint para linting
- Prettier para formatação
- Commits seguindo Conventional Commits
- Branches seguindo Git Flow

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'feat: add some amazing feature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença ISC. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🎯 Guia para Backend

### Estrutura do Backend

```
apps/backend/
├── src/
│   ├── auth/              # Autenticação e autorização
│   │   ├── guards/        # Guards de autenticação
│   │   ├── strategies/    # Estratégias de autenticação
│   │   ├── auth.controller.ts
│   │   ├── auth.module.ts
│   │   └── auth.service.ts
│   ├── prisma/           # Configuração do banco de dados
│   │   ├── prisma.module.ts
│   │   └── prisma.service.ts
│   ├── users/            # Gerenciamento de usuários
│   │   ├── users.controller.ts
│   │   ├── users.module.ts
│   │   └── users.service.ts
│   ├── app.module.ts     # Módulo principal
│   └── main.ts          # Arquivo de inicialização
```

### Conceitos Importantes

1. **NestJS**

   - Controllers: Endpoints da API
   - Services: Lógica de negócio
   - Modules: Organização do código
   - Guards: Proteção de rotas
   - DTOs: Validação de dados

2. **Prisma**

   - Schema: Definição do banco de dados
   - Queries: Operações no banco
   - Migrations: Controle de versão do banco

3. **Autenticação**
   - JWT: Tokens de autenticação
   - Guards: Proteção de rotas
   - Strategies: Estratégias de autenticação

### Testando a API

1. Inicie o servidor:

```bash
cd apps/backend
npm run start:dev
```

2. Acesse a documentação Swagger:

```
http://localhost:3000/api
```

3. Teste os endpoints usando o Swagger, Postman e Insomnia

### Boas Práticas

- Use DTOs para validação
- Implemente tratamento de erros
- Documente endpoints com Swagger
- Siga princípios SOLID
- Use migrations para alterações
- Mantenha índices otimizados

## 🎯 Guia para Frontend

### Estrutura do Frontend

```
apps/frontend/
├── src/
│   ├── app/                 # Páginas da aplicação (Next.js App Router)
│   │   ├── layout.tsx      # Layout principal
│   │   ├── page.tsx        # Página inicial
│   │   ├── login/          # Página de login
│   │   └── globals.css     # Estilos globais
│   ├── components/         # Componentes reutilizáveis
│   │   ├── auth/          # Componentes de autenticação
│   │   │   └── LoginForm.tsx
│   │   └── layout/        # Componentes de layout
│   │       └── Header.tsx
│   ├── lib/               # Utilitários e configurações
│   │   └── api.ts         # Configuração da API
│   └── types/             # Definições de tipos TypeScript
└── public/                # Arquivos estáticos
```

### Tecnologias do Frontend

- **Next.js 13+**: Framework React com App Router
- **TypeScript**: Superset JavaScript com tipagem estática
- **Tailwind CSS**: Framework CSS utilitário
- **React**: Biblioteca para construção de interfaces
- **ESLint**: Linter para código JavaScript/TypeScript
- **Prettier**: Formatador de código

### Guia de Desenvolvimento Frontend

1. **Criando uma Nova Página**

   - Crie um novo diretório em `src/app/` com o nome da página
   - Adicione um arquivo `page.tsx` dentro do diretório
   - Exporte um componente React como default

2. **Criando um Novo Componente**

   - Crie um novo arquivo em `src/components/` com o nome do componente
   - Use a extensão `.tsx` para componentes com TypeScript
   - Exporte o componente como named export

3. **Estilização**
   - Use classes utilitárias do Tailwind
   - Para estilos personalizados, use `@apply` no arquivo `globals.css`
   - Mantenha a consistência com o design system

### Scripts do Frontend

```bash
cd apps/frontend
npm run dev      # Inicia o servidor de desenvolvimento
npm run build    # Cria a build de produção
npm run start    # Inicia o servidor de produção
npm run lint     # Executa o linter
npm run format   # Formata o código com Prettier
```

### Boas Práticas Frontend

1. **Performance**
   - Use lazy loading para componentes grandes
   - Otimize imagens
   - Implemente code splitting
   - Use memo quando necessário
   - Use tags semânticas
   - Adicione atributos ARIA
   - Mantenha contraste adequado
   - Teste com leitores de tela
   - Valide inputs
   - Sanitize dados
   - Use HTTPS
   - Implemente CSRF protection
   - Mantenha componentes pequenos
   - Use TypeScript
   - Siga princípios SOLID

### Recursos Úteis Frontend

- [Documentação do Next.js](https://nextjs.org/docs)
- [Documentação do Tailwind CSS](https://tailwindcss.com/docs)
- [Documentação do TypeScript](https://www.typescriptlang.org/docs)
- [Documentação do React](https://reactjs.org/docs)
