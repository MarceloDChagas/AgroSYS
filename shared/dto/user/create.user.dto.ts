import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { ERole } from '@shared/enums/user.enum';
import { Email } from '../../value-objects/email.vo';
import { Name } from '../../value-objects/name.vo';
import { Password } from '../../value-objects/password.vo';

export class CreateUserDto {
  @IsEmail()
  @IsNotEmpty()
  email!: Email;

  @IsString()
  @IsNotEmpty()
  password!: Password;

  @IsString()
  @IsNotEmpty()
  name!: Name;

  @IsString()
  @IsNotEmpty()
  role?: ERole;
}
