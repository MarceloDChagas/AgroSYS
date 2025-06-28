import { EUnit } from "@shared/enums/unit.enum";

export type InputMaterialEntry = {
  id: string;
  date: Date;
  quantityKg: {
    amount: number;
    unit: EUnit;
  };
  productId: string;
};
