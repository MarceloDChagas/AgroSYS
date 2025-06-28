# Componentes UI Reutilizáveis

Esta pasta contém componentes reutilizáveis para o sistema AgroSys, seguindo o design system institucional com identidade agro.

## Componentes Disponíveis

### 1. SystemInfo

Exibe informações do sistema como versão, última atualização e status.

```tsx
import { SystemInfo } from "../components/ui/SystemInfo";

<SystemInfo version="2.0.1" lastUpdate="21/06/2025" status="operational" />;
```

### 2. DashboardCard

Card clicável para navegação entre módulos do sistema.

```tsx
import { DashboardCard } from "../components/ui/DashboardCard";

<DashboardCard
  icon={<FaLeaf />}
  label="Colheita"
  description="Gerencie suas colheitas"
  route="/colheita"
  color="text-agro-600"
  bgColor="bg-agro-100"
/>;
```

### 3. StatCard

Card para exibir estatísticas simples.

```tsx
import { StatCard } from "../components/ui/StatCard";

<StatCard
  title="Colheitas"
  value="24"
  icon={<FaLeaf />}
  iconBgColor="bg-agro-100"
  iconColor="text-agro-600"
/>;
```

### 4. SummaryCard

Card para exibir estatísticas com tendência.

```tsx
import { SummaryCard } from "../components/ui/SummaryCard";

<SummaryCard
  title="Vendas"
  value="R$ 45.2k"
  icon={<FaDollarSign />}
  iconBgColor="bg-wheat-100"
  iconColor="text-wheat-600"
  trend={{ value: "+12%", isPositive: true }}
/>;
```

### 5. PageHeader

Cabeçalho padrão para páginas com título, subtítulo e ações.

```tsx
import { PageHeader } from "../components/ui/PageHeader";

<PageHeader title="Gestão de Vendas" subtitle="Controle completo de vendas">
  <button className="btn-primary">Nova Venda</button>
</PageHeader>;
```

### 6. DataTable

Tabela de dados reutilizável com suporte a ações.

```tsx
import { DataTable } from "../components/ui/DataTable";

const columns = [
  { key: "id", label: "ID" },
  { key: "name", label: "Nome" },
];

const data = [
  { id: "1", name: "João" },
  { id: "2", name: "Maria" },
];

<DataTable columns={columns} data={data} actions={<button>Editar</button>} />;
```

### 7. FilterBar

Barra de filtros reutilizável.

```tsx
import { FilterBar } from "../components/ui/FilterBar";

const filters = [
  {
    key: "status",
    label: "Status",
    options: [
      { value: "active", label: "Ativo" },
      { value: "inactive", label: "Inativo" },
    ],
    placeholder: "Filtrar por status",
  },
];

<FilterBar
  filters={filters}
  onFilterChange={(key, value) => console.log(key, value)}
>
  <button>Buscar</button>
</FilterBar>;
```

### 8. ActionButtons

Painel de botões de ação.

```tsx
import { ActionButtons } from "../components/ui/ActionButtons";

const actions = [
  {
    label: "Editar",
    onClick: () => console.log("Editar"),
    variant: "primary",
    icon: <FaEdit />,
  },
  {
    label: "Excluir",
    onClick: () => console.log("Excluir"),
    variant: "danger",
    icon: <FaTrash />,
  },
];

<ActionButtons actions={actions} title="AÇÕES" />;
```

### 9. FormField

Campo de formulário com label e validação.

```tsx
import { FormField } from "../components/ui/FormField";

<FormField label="Nome" required error="Nome é obrigatório">
  <input className="input-field" />
</FormField>;
```

## Design System

### Cores

- **Agro**: Verde institucional (#265C28)
- **Earth**: Marrom rústico (#A65628)
- **Wheat**: Amarelo (#FBBA00)
- **Neutral**: Tons neutros para texto e fundos

### Tipografia

- **Display**: Merriweather (títulos)
- **Body**: Inter (texto)
- **Serif**: Lora (destaques)

### Componentes Base

- **card**: Card básico com sombra institucional
- **card-agro**: Card com borda verde e fundo agro
- **btn-primary**: Botão primário agro
- **btn-secondary**: Botão secundário neutro
- **input-field**: Campo de entrada padronizado

## Uso

Todos os componentes podem ser importados do arquivo de índice:

```tsx
import {
  SystemInfo,
  DashboardCard,
  StatCard,
  PageHeader,
  DataTable,
  FilterBar,
  ActionButtons,
  FormField,
  SummaryCard,
} from "../components/ui";
```
