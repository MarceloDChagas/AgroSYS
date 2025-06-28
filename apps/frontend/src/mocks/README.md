# Mocks do Sistema Agropecuário

Este diretório contém dados mockados para desenvolvimento e testes do sistema agropecuário.

## Estrutura

```
mocks/
├── index.ts              # Exportações centralizadas
├── invoiceMocks.ts       # Dados de notas fiscais
├── toolMocks.ts          # Dados de ferramentas
└── README.md            # Esta documentação
```

## Notas Fiscais (`invoiceMocks.ts`)

### Dados Incluídos:

- **8 notas fiscais** com diferentes tipos (ENTRADA, SAIDA, TRANSFERENCIA)
- **8 tipos de produtos** agropecuários (fertilizantes, rações, vacinas, etc.)
- **Diferentes status**: PENDENTE, APROVADA, CANCELADA, FINALIZADA
- **Fornecedores e clientes** realistas do setor agropecuário

### Produtos Mockados:

- Fertilizante NPK 10-10-10
- Ração para Gado
- Vacina Brucelose
- Semente de Milho
- Herbicida Glifosato
- Arame Farpado
- Sal Mineral
- Vermífugo Bovino

### Funções Auxiliares:

- `getInvoicesByType()` - Filtrar por tipo
- `getInvoicesByStatus()` - Filtrar por status
- `getInvoicesByDateRange()` - Filtrar por período
- `getInvoicesBySupplier()` - Filtrar por fornecedor
- `getInvoicesByCustomer()` - Filtrar por cliente

## Ferramentas (`toolMocks.ts`)

### Dados Incluídos:

- **15 ferramentas** agropecuárias
- **3 status**: DISPONIVEL, EMPRESTADA, SOLICITADA
- **Pessoas responsáveis** por empréstimos
- **Datas de criação e atualização**

### Ferramentas Mockadas:

- Trator Massey Ferguson 275
- Arado de Discos
- Pulverizador Costal
- Enxada Rotativa
- Mangueira de Irrigação
- Serra Elétrica Portátil
- Bomba de Água 2HP
- Carrinho de Mão
- Foice para Roçada
- Máquina de Solda
- Compressor de Ar
- Furadeira Elétrica
- Cadeado com Chave
- Lanterna Recarregável
- Kit de Ferramentas Manuais

### Funções Auxiliares:

- `getToolsByStatus()` - Filtrar por status
- `getToolsByName()` - Buscar por nome
- `getToolsByResponsiblePerson()` - Filtrar por responsável
- `getAvailableTools()` - Ferramentas disponíveis
- `getBorrowedTools()` - Ferramentas emprestadas
- `getRequestedTools()` - Ferramentas solicitadas

### Funções de Simulação de API:

- `searchTools()` - Busca com delay simulado
- `createMockTool()` - Criação de ferramenta
- `updateMockTool()` - Atualização de ferramenta
- `deleteMockTool()` - Exclusão de ferramenta

## Uso

### Importação Simples:

```typescript
import { mockInvoices, mockTools } from "@/mocks";
```

### Importação de Funções:

```typescript
import { getInvoicesByType, getAvailableTools, searchTools } from "@/mocks";
```

### Importação de Tipos:

```typescript
import type { Invoice, Tool } from "@/mocks";
```

## Serviços Relacionados

Os mocks são complementados pelos serviços em `services/api/`:

- `invoiceService.ts` - Serviço para notas fiscais
- `toolService.ts` - Serviço para ferramentas

## Características dos Dados

### Realismo:

- Dados baseados em cenários reais do setor agropecuário
- Preços e quantidades realistas
- Nomes de fornecedores e produtos do mercado

### Variedade:

- Diferentes tipos de transações
- Múltiplos status de aprovação
- Diversos produtos e ferramentas

### Consistência:

- Estrutura de dados padronizada
- IDs únicos para cada item
- Timestamps consistentes

## Desenvolvimento

Para adicionar novos mocks:

1. Crie o arquivo de dados mockados
2. Adicione as funções auxiliares necessárias
3. Exporte no `index.ts`
4. Atualize esta documentação
