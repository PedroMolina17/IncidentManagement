/*
  Warnings:

  - A unique constraint covering the columns `[incidents_id]` on the table `image_cover` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "image_cover_incidents_id_key" ON "image_cover"("incidents_id");
