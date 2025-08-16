import { EUnit } from "../enums/unit.enum";

export interface Insumo {
  id: string;
  name: string;
  type: string;
  amount: number;
  unit: EUnit;
  supplier?: string;
  expiryDate?: Date;
  observations?: string;
  createdAt: Date;
  updatedAt: Date;
}
