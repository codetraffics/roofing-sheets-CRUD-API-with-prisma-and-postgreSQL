/*
  Warnings:

  - You are about to drop the column `created_at` on the `Roof` table. All the data in the column will be lost.
  - Added the required column `publishedDate` to the `Roof` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Roof" DROP COLUMN "created_at",
ADD COLUMN     "publishedDate" TIMESTAMP(3) NOT NULL;
