-- CreateEnum
CREATE TYPE "Role" AS ENUM ('COMMON', 'ADMIN');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'COMMON';
