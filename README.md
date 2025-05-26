# Sistema de Gestão Agropecuária

Sistema completo para gestão de propriedades rurais, desenvolvido com tecnologias modernas em uma arquitetura monorepo.

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
