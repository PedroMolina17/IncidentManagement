/*
  Warnings:

  - A unique constraint covering the columns `[description]` on the table `status` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "status_description_key" ON "status"("description");
