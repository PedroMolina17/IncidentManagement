/*
  Warnings:

  - You are about to drop the column `room_name` on the `room` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `room` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `room` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "room_room_name_key";

-- AlterTable
ALTER TABLE "room" DROP COLUMN "room_name",
ADD COLUMN     "name" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "room_name_key" ON "room"("name");
