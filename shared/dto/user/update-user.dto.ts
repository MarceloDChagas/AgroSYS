import {
  IsOptional,
  IsString,
  MinLength,
  IsEnum,
  IsEmail,
} from 'class-validator';
import { ERole } from '@shared/enums/user.enum';

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  @MinLength(8)
  password?: string;

  @IsOptional()
  @IsEnum(ERole)
  role?: ERole;
}
