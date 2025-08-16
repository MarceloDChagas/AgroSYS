import {
  IsOptional,
  IsUUID,
  IsDateString,
  IsNumber,
  IsEnum,
} from "class-validator";
import { EUnit } from "../../enums/unit.enum";

export class UpdateInputMaterialEntryDto {
  @IsOptional()
  @IsUUID()
  productId?: string;

  @IsOptional()
  @IsDateString()
  date?: string;

  @IsOptional()
  @IsNumber()
  amount?: number;

  @IsOptional()
  @IsEnum(EUnit)
  unit?: EUnit;
}
