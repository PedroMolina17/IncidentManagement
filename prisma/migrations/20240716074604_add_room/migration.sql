/*
  Warnings:

  - You are about to drop the column `users_id` on the `incidents` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "incidents" DROP CONSTRAINT "incidents_users_id_fkey";

-- AlterTable
ALTER TABLE "incidents" DROP COLUMN "users_id",
ADD COLUMN     "room_id" INTEGER;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "room_id" INTEGER;

-- CreateTable
CREATE TABLE "room" (
    "room_id" SERIAL NOT NULL,
    "room_name" TEXT NOT NULL,

    CONSTRAINT "room_pkey" PRIMARY KEY ("room_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "room_room_name_key" ON "room"("room_name");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_room_id_fkey" FOREIGN KEY ("room_id") REFERENCES "room"("room_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "incidents" ADD CONSTRAINT "incidents_room_id_fkey" FOREIGN KEY ("room_id") REFERENCES "room"("room_id") ON DELETE SET NULL ON UPDATE CASCADE;
