-- DropForeignKey
ALTER TABLE "Roof" DROP CONSTRAINT "Roof_distributorId_fkey";

-- AddForeignKey
ALTER TABLE "Roof" ADD CONSTRAINT "Roof_distributorId_fkey" FOREIGN KEY ("distributorId") REFERENCES "Distributor"("id") ON DELETE CASCADE ON UPDATE CASCADE;
