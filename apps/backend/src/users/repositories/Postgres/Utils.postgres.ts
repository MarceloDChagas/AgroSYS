import { Role } from "@prisma/client";

export type UserPrismaSelected = {
  id: string;
  email: string;
  password: string;
  name: string;
  role: Role;
};

export const userSelect = {
  id: true,
  email: true,
  password: true,
  name: true,
  role: true,
};
