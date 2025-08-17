import { useState, useCallback } from "react";
import {
  productService,
  type CreateProductRequest,
  type UpdateProductRequest,
  type Product,
} from "../services/api";

export interface UseProductResult {
  products: Product[];
  loading: boolean;
  error: string;
  fetchProducts: (filter?: string) => Promise<void>;
  refreshProducts: () => Promise<void>;
  createProduct: (productData: CreateProductRequest) => Promise<void>;
  updateProduct: (
    id: string,
    productData: UpdateProductRequest
  ) => Promise<void>;
  deleteProduct: (id: string) => Promise<void>;
  searchProducts: (query: string) => Promise<void>;
  getProductById: (id: string) => Promise<Product | null>;
}

export function useProduct(): UseProductResult {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchProducts = useCallback(async (filter?: string) => {
    setLoading(true);
    setError("");

    try {
      let result: Product[];

      if (filter) {
        // Se há um filtro, fazer busca
        result = await productService.searchProducts(filter);
      } else {
        result = await productService.getAllProducts();
      }

      setProducts(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro ao buscar produtos");
    } finally {
      setLoading(false);
    }
  }, []);

  const refreshProducts = useCallback(async () => {
    await fetchProducts();
  }, [fetchProducts]);

  const createProduct = useCallback(
    async (productData: CreateProductRequest) => {
      setLoading(true);
      setError("");

      try {
        const newProduct = await productService.createProduct(productData);
        setProducts((prev) => [...prev, newProduct]);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Erro ao criar produto");
        throw err;
      } finally {
        setLoading(false);
      }
    },
    []
  );

  const updateProduct = useCallback(
    async (id: string, productData: UpdateProductRequest) => {
      setLoading(true);
      setError("");

      try {
        const updatedProduct = await productService.updateProduct(
          id,
          productData
        );
        setProducts((prev) =>
          prev.map((product) => (product.id === id ? updatedProduct : product))
        );
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Erro ao atualizar produto"
        );
        throw err;
      } finally {
        setLoading(false);
      }
    },
    []
  );

  const deleteProduct = useCallback(async (id: string) => {
    setLoading(true);
    setError("");

    try {
      await productService.deleteProduct(id);
      setProducts((prev) => prev.filter((product) => product.id !== id));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro ao deletar produto");
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const searchProducts = useCallback(async (query: string) => {
    setLoading(true);
    setError("");

    try {
      const result = await productService.searchProducts(query);
      setProducts(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro ao buscar produtos");
    } finally {
      setLoading(false);
    }
  }, []);

  const getProductById = useCallback(
    async (id: string): Promise<Product | null> => {
      setLoading(true);
      setError("");

      try {
        const product = await productService.getProductById(id);
        return product;
      } catch (err) {
        setError(err instanceof Error ? err.message : "Erro ao buscar produto");
        return null;
      } finally {
        setLoading(false);
      }
    },
    []
  );

  return {
    products,
    loading,
    error,
    fetchProducts,
    refreshProducts,
    createProduct,
    updateProduct,
    deleteProduct,
    searchProducts,
    getProductById,
  };
}
