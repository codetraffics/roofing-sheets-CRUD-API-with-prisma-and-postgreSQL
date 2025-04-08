/*
  Warnings:

  - You are about to drop the `Sheet` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Sheet";

-- CreateTable
CREATE TABLE "Roof" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "distributorId" INTEGER NOT NULL,

    CONSTRAINT "Roof_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Distributor" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "location" TEXT NOT NULL,

    CONSTRAINT "Distributor_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Roof" ADD CONSTRAINT "Roof_distributorId_fkey" FOREIGN KEY ("distributorId") REFERENCES "Distributor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
