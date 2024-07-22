/*
  Warnings:

  - You are about to drop the column `room_id` on the `incidents` table. All the data in the column will be lost.
  - You are about to drop the column `type_incidents_id` on the `incidents` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "image_cover" DROP CONSTRAINT "image_cover_incidents_id_fkey";

-- DropForeignKey
ALTER TABLE "incidents" DROP CONSTRAINT "incidents_room_id_fkey";

-- DropForeignKey
ALTER TABLE "incidents" DROP CONSTRAINT "incidents_type_incidents_id_fkey";

-- AlterTable
ALTER TABLE "incidents" DROP COLUMN "room_id",
DROP COLUMN "type_incidents_id";
