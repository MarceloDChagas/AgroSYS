import { IsUUID, IsDateString, IsNumber, IsEnum } from "class-validator";
import { EUnit } from "../../enums/unit.enum";

export class CreateInputMaterialEntryDto {
  @IsUUID()
  productId: string;

  @IsDateString()
  date: string;

  @IsNumber()
  amount: number;

  @IsEnum(EUnit)
  unit: EUnit;
}
