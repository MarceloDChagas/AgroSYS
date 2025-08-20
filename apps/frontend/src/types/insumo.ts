export interface Insumo {
  id: string;
  name: string;
  type: string;
  amount: number;
  unit: "KG" | "LITRO" | "UNIDADE" | "SACA" | "CAIXA";
  supplier?: string;
  expiryDate?: Date;
  observations?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateInsumoDto {
  name: string;
  type: string;
  amount: number;
  unit: "KG" | "LITRO" | "UNIDADE" | "SACA" | "CAIXA";
  supplier?: string;
  expiryDate?: Date;
  observations?: string;
}

export interface UpdateInsumoDto {
  name?: string;
  type?: string;
  amount?: number;
  unit?: "KG" | "LITRO" | "UNIDADE" | "SACA" | "CAIXA";
  supplier?: string;
  expiryDate?: Date;
  observations?: string;
}

