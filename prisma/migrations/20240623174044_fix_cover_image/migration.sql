/*
  Warnings:

  - You are about to drop the column `image_description_id` on the `image_cover` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "image_cover" DROP CONSTRAINT "image_cover_image_description_id_fkey";

-- AlterTable
ALTER TABLE "image_cover" DROP COLUMN "image_description_id";

-- AlterTable
ALTER TABLE "image_description" ADD COLUMN     "image_cover_id" INTEGER;

-- AddForeignKey
ALTER TABLE "image_description" ADD CONSTRAINT "image_description_image_cover_id_fkey" FOREIGN KEY ("image_cover_id") REFERENCES "image_cover"("image_cover_id") ON DELETE SET NULL ON UPDATE CASCADE;
