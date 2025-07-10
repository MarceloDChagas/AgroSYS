-- CreateEnum
CREATE TYPE "EUnit" AS ENUM ('KG', 'LITRO', 'UNIDADE', 'SACA', 'CAIXA');

-- CreateEnum
CREATE TYPE "HarvestStatus" AS ENUM ('SCHEDULED', 'IN_PROGRESS', 'COMPLETED', 'CANCELLED');

-- CreateTable
CREATE TABLE "input_material_entries" (
    "id" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "amount" DECIMAL(10,2) NOT NULL,
    "unit" "EUnit" NOT NULL,
    "productId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "input_material_entries_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "harvests" (
    "id" TEXT NOT NULL,
    "harvestDate" TIMESTAMP(3) NOT NULL,
    "product" TEXT NOT NULL,
    "quantity" DECIMAL(10,2) NOT NULL,
    "unit" TEXT NOT NULL,
    "uap" TEXT NOT NULL,
    "responsible" TEXT NOT NULL,
    "cycle" TEXT NOT NULL,
    "status" "HarvestStatus" NOT NULL DEFAULT 'SCHEDULED',
    "equipment" TEXT,
    "observations" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "harvests_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "input_material_entries" ADD CONSTRAINT "input_material_entries_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
