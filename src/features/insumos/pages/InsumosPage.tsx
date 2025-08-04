import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FilterBar } from "../../components/FilterBar";

const InsumosPage: React.FC = () => {
  const navigate = useNavigate();
  const [filters, _setFilters] = useState<Record<string, string>>({});

  const _actions = [
    {
      label: "EDITAR",
      onClick: () => navigate("/insumos/editar"),
      variant: "primary" as const,
      icon: <FaEdit size={14} />,
    },
  ];

  return (
    <div>
      <FilterBar
        filters={filters}
        onFilterChange={(_key, _value) => {
          /* TODO: Implementar filtros */
        }}
      />
    </div>
  );
};

export default InsumosPage;
