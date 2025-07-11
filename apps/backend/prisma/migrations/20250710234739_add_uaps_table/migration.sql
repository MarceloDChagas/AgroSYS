-- CreateTable
CREATE TABLE "uaps" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "area" DECIMAL(10,2) NOT NULL,
    "cropType" TEXT NOT NULL,
    "responsible" TEXT NOT NULL,
    "observations" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "uaps_pkey" PRIMARY KEY ("id")
);
