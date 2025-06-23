import { IsEmail, IsOptional, IsString, IsEnum } from 'class-validator';
import { ERole } from '../../enums/user.enum';
import { Email } from '../../value-objects/email.vo';
import { Name } from '../../value-objects/name.vo';
import { Password } from '../../value-objects/password.vo';

export class UpdateUserDto {
  @IsOptional()
  @IsEmail()
  email?: Email;

  @IsOptional()
  @IsString()
  name?: Name;

  @IsOptional()
  @IsString()
  password?: Password;

  @IsOptional()
  @IsEnum(ERole)
  role?: ERole;
}
