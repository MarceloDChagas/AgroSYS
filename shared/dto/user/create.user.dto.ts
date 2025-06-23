import {
  IsEnum,
  IsNotEmpty,
  IsString,
  IsEmail,
  MinLength,
} from 'class-validator';
import { ERole } from '@shared/enums/user.enum';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(8)
  password: string;

  @IsEnum(ERole)
  role: ERole;
}
