import { Prisma } from "@prisma/client";

export type PrismaUap = Prisma.UAPGetPayload<{ select: typeof uapSelect }>;

export type UAPPrismaSelected = {
  id: string;
  name: string;
  location: string;
  area: number;
  cropType: string;
  responsible: string;
  observations: string;
};
// Define the select object
export const uapSelect = {
  id: true,
  name: true,
  location: true,
  area: true,
  cropType: true,
  responsible: true,
  observations: true,
  createdAt: true,
  updatedAt: true,
};
