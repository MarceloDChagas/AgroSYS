import { Email } from "@shared/value-objects/email.vo";
import { Name } from "@shared/value-objects/name.vo";
import { Password } from "@shared/value-objects/password.vo";
import { ERole } from "@shared/enums/user.enum";

export class CreateUserDto {
  constructor(
    public email: Email,
    public password: Password,
    public name: Name,
    public role?: ERole
  ) {}
}
