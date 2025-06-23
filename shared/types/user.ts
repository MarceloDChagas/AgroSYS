import { ERole } from '../enums/user.enum';
import { Email } from '../value-objects/email.vo';
import { Name } from '../value-objects/name.vo';
import { Password } from '../value-objects/password.vo';

export type User = {
  id: string;
  email: Email;
  name: Name;
  password: Password;
  role: ERole;
};
