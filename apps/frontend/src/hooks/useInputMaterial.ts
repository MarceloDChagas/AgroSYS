import { useState, useCallback } from "react";
import { inputMaterialService } from "@/services/api/inputMaterialService";
import type {
  InputMaterialEntry,
  CreateInputMaterialEntryDto,
  UpdateInputMaterialEntryDto,
} from "@/services/api/inputMaterialService";

export function useInputMaterial() {
  const [inputMaterials, setInputMaterials] = useState<InputMaterialEntry[]>(
    []
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchInputMaterials = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await inputMaterialService.getAll();
      setInputMaterials(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro ao carregar insumos");
    } finally {
      setLoading(false);
    }
  }, []);

  const createInputMaterial = useCallback(
    async (data: CreateInputMaterialEntryDto) => {
      setLoading(true);
      setError(null);
      try {
        const newInputMaterial = await inputMaterialService.create(data);
        setInputMaterials((prev) => [newInputMaterial, ...prev]);
        return newInputMaterial;
      } catch (err) {
        setError(err instanceof Error ? err.message : "Erro ao criar insumo");
        throw err;
      } finally {
        setLoading(false);
      }
    },
    []
  );

  const updateInputMaterial = useCallback(
    async (id: string, data: UpdateInputMaterialEntryDto) => {
      setLoading(true);
      setError(null);
      try {
        const updatedInputMaterial = await inputMaterialService.update(
          id,
          data
        );
        setInputMaterials((prev) =>
          prev.map((inputMaterial) =>
            inputMaterial.id === id ? updatedInputMaterial : inputMaterial
          )
        );
        return updatedInputMaterial;
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Erro ao atualizar insumo"
        );
        throw err;
      } finally {
        setLoading(false);
      }
    },
    []
  );

  const deleteInputMaterial = useCallback(async (id: string) => {
    setLoading(true);
    setError(null);
    try {
      await inputMaterialService.delete(id);
      setInputMaterials((prev) =>
        prev.filter((inputMaterial) => inputMaterial.id !== id)
      );
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro ao excluir insumo");
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const getByProduct = useCallback(async (productId: string) => {
    setLoading(true);
    setError(null);
    try {
      const data = await inputMaterialService.getByProduct(productId);
      return data;
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Erro ao carregar insumos do produto"
      );
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    inputMaterials,
    loading,
    error,
    fetchInputMaterials,
    createInputMaterial,
    updateInputMaterial,
    deleteInputMaterial,
    getByProduct,
  };
}
