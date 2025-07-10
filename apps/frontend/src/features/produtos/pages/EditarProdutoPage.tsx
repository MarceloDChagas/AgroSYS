import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { SideMenu } from "@/components/layout/SideMenu";
import { PageHeader } from "@/components/ui/PageHeader";
import { FormField } from "@/components/ui/FormField";
import { FaSave, FaArrowLeft } from "react-icons/fa";
import { useProduct } from "@/hooks/useProduct";
import type { Product } from "@/services/api";

function EditarProdutoPage() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { updateProduct, getProductById, loading, error } = useProduct();
  const [product, setProduct] = useState<Product | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    quantity: "",
    status: "DISPONIVEL",
    category: "",
  });

  useEffect(() => {
    const fetchProduct = async () => {
      if (id) {
        const productData = await getProductById(id);
        if (productData) {
          setProduct(productData);
          setFormData({
            name: productData.name,
            description: productData.description || "",
            price: productData.price.toString(),
            quantity: productData.quantity.toString(),
            status: productData.status,
            category: productData.category || "",
          });
        }
      }
    };

    fetchProduct();
  }, [id, getProductById]);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!id) return;

    try {
      await updateProduct(id, {
        name: formData.name,
        description: formData.description || undefined,
        price: parseFloat(formData.price),
        quantity: parseInt(formData.quantity),
        status: formData.status,
        category: formData.category || undefined,
      });

      navigate("/produtos");
    } catch {
      // erro tratado
    }
  };

  if (!product && !loading) {
    return (
      <SideMenu title="EDITAR PRODUTO">
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <p className="text-red-600 mb-4">Produto não encontrado</p>
            <button
              onClick={() => navigate("/produtos")}
              className="btn-primary"
            >
              Voltar para produtos
            </button>
          </div>
        </div>
      </SideMenu>
    );
  }

  return (
    <SideMenu title="EDITAR PRODUTO">
      <div className="space-y-6">
        {/* Header */}
        <PageHeader
          title="Editar Produto"
          subtitle="Atualize as informações do produto"
        >
          <button
            onClick={() => navigate("/produtos")}
            className="btn-secondary flex items-center gap-2"
          >
            <FaArrowLeft size={14} />
            Voltar
          </button>
        </PageHeader>

        {/* Error Message */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="text-red-600">{error}</p>
          </div>
        )}

        {/* Form */}
        <div className="bg-white rounded-lg shadow-soft border border-neutral-200 p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField label="Nome do Produto" required>
                <input
                  type="text"
                  placeholder="Ex: Semente de Soja RR Intacta"
                  className="form-input"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  required
                />
              </FormField>

              <FormField label="Categoria" required>
                <select
                  className="form-select"
                  value={formData.category}
                  onChange={(e) =>
                    handleInputChange("category", e.target.value)
                  }
                  required
                >
                  <option value="">Selecione a categoria</option>
                  <option value="semente">Semente</option>
                  <option value="muda">Muda</option>
                  <option value="fertilizante">Fertilizante</option>
                  <option value="defensivo">Defensivo</option>
                  <option value="equipamento">Equipamento</option>
                </select>
              </FormField>

              <FormField label="Preço Unitário" required>
                <input
                  type="number"
                  placeholder="0,00"
                  step="0.01"
                  className="form-input"
                  value={formData.price}
                  onChange={(e) => handleInputChange("price", e.target.value)}
                  required
                />
              </FormField>

              <FormField label="Quantidade" required>
                <input
                  type="number"
                  placeholder="0"
                  className="form-input"
                  value={formData.quantity}
                  onChange={(e) =>
                    handleInputChange("quantity", e.target.value)
                  }
                  required
                />
              </FormField>

              <FormField label="Status" required>
                <select
                  className="form-select"
                  value={formData.status}
                  onChange={(e) => handleInputChange("status", e.target.value)}
                  required
                >
                  <option value="DISPONIVEL">Disponível</option>
                  <option value="ESGOTADO">Esgotado</option>
                  <option value="BAIXO_ESTOQUE">Baixo Estoque</option>
                </select>
              </FormField>

              <FormField label="Fornecedor">
                <input
                  type="text"
                  placeholder="Ex: Sementes Brasil Ltda"
                  className="form-input"
                />
              </FormField>

              <FormField label="Data de Validade">
                <input type="date" className="form-input" />
              </FormField>

              <FormField label="Local de Armazenamento">
                <input
                  type="text"
                  placeholder="Ex: Galpão 1 - Prateleira A"
                  className="form-input"
                />
              </FormField>
            </div>

            <div className="col-span-full">
              <FormField label="Descrição">
                <textarea
                  placeholder="Informações adicionais sobre o produto..."
                  rows={3}
                  className="form-textarea"
                  value={formData.description}
                  onChange={(e) =>
                    handleInputChange("description", e.target.value)
                  }
                />
              </FormField>
            </div>

            <div className="flex justify-end gap-4 pt-6 border-t border-neutral-200">
              <button
                type="button"
                onClick={() => navigate("/produtos")}
                className="btn-secondary"
                disabled={loading}
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="btn-primary flex items-center gap-2"
                disabled={loading}
              >
                <FaSave size={14} />
                {loading ? "Salvando..." : "Salvar Alterações"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </SideMenu>
  );
}

export default EditarProdutoPage;
