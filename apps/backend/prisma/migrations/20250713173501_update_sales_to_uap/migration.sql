/*
  Warnings:

  - You are about to drop the column `userId` on the `invoices` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `sales` table. All the data in the column will be lost.
  - Added the required column `uapId` to the `invoices` table without a default value. This is not possible if the table is not empty.
  - Added the required column `uapId` to the `sales` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "invoices" DROP CONSTRAINT "invoices_userId_fkey";

-- DropForeignKey
ALTER TABLE "sales" DROP CONSTRAINT "sales_userId_fkey";

-- AlterTable
ALTER TABLE "invoices" DROP COLUMN "userId",
ADD COLUMN     "uapId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "sales" DROP COLUMN "userId",
ADD COLUMN     "uapId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "sales" ADD CONSTRAINT "sales_uapId_fkey" FOREIGN KEY ("uapId") REFERENCES "uaps"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "invoices" ADD CONSTRAINT "invoices_uapId_fkey" FOREIGN KEY ("uapId") REFERENCES "uaps"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
