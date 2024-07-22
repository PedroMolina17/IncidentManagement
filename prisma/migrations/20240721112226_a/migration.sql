-- AlterTable
ALTER TABLE "incidents" ADD COLUMN     "room_id" INTEGER,
ADD COLUMN     "type_incidents_id" INTEGER;

-- AddForeignKey
ALTER TABLE "incidents" ADD CONSTRAINT "incidents_type_incidents_id_fkey" FOREIGN KEY ("type_incidents_id") REFERENCES "type_incidents"("type_incidents_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "incidents" ADD CONSTRAINT "incidents_room_id_fkey" FOREIGN KEY ("room_id") REFERENCES "room"("room_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "image_cover" ADD CONSTRAINT "image_cover_incidents_id_fkey" FOREIGN KEY ("incidents_id") REFERENCES "incidents"("incidents_id") ON DELETE SET NULL ON UPDATE CASCADE;
