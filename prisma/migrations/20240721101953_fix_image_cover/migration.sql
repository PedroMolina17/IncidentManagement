/*
  Warnings:

  - You are about to drop the column `image_cover_id` on the `incidents` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "incidents" DROP CONSTRAINT "incidents_image_cover_id_fkey";

-- AlterTable
ALTER TABLE "image_cover" ADD COLUMN     "incidents_id" INTEGER;

-- AlterTable
ALTER TABLE "incidents" DROP COLUMN "image_cover_id";

-- AddForeignKey
ALTER TABLE "image_cover" ADD CONSTRAINT "image_cover_incidents_id_fkey" FOREIGN KEY ("incidents_id") REFERENCES "incidents"("incidents_id") ON DELETE SET NULL ON UPDATE CASCADE;
