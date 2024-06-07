-- CreateTable
CREATE TABLE "typeusers" (
    "type_user_id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "typeusers_pkey" PRIMARY KEY ("type_user_id")
);

-- CreateTable
CREATE TABLE "users" (
    "user_id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "type_user_id" INTEGER,

    CONSTRAINT "users_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "incidents" (
    "incidents_id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "ubication" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status_id" INTEGER,
    "type_incidents_id" INTEGER,
    "image_cover_id" INTEGER,
    "users_id" INTEGER,

    CONSTRAINT "incidents_pkey" PRIMARY KEY ("incidents_id")
);

-- CreateTable
CREATE TABLE "image_cover" (
    "image_cover_id" SERIAL NOT NULL,
    "img_url" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image_description_id" INTEGER,

    CONSTRAINT "image_cover_pkey" PRIMARY KEY ("image_cover_id")
);

-- CreateTable
CREATE TABLE "image_description" (
    "image_description_id" SERIAL NOT NULL,
    "img_url" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "image_description_pkey" PRIMARY KEY ("image_description_id")
);

-- CreateTable
CREATE TABLE "status" (
    "status_id" SERIAL NOT NULL,
    "decription" TEXT NOT NULL,

    CONSTRAINT "status_pkey" PRIMARY KEY ("status_id")
);

-- CreateTable
CREATE TABLE "type_incidents" (
    "type_incidents_id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "type_incidents_pkey" PRIMARY KEY ("type_incidents_id")
);

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_type_user_id_fkey" FOREIGN KEY ("type_user_id") REFERENCES "typeusers"("type_user_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "incidents" ADD CONSTRAINT "incidents_status_id_fkey" FOREIGN KEY ("status_id") REFERENCES "status"("status_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "incidents" ADD CONSTRAINT "incidents_type_incidents_id_fkey" FOREIGN KEY ("type_incidents_id") REFERENCES "type_incidents"("type_incidents_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "incidents" ADD CONSTRAINT "incidents_image_cover_id_fkey" FOREIGN KEY ("image_cover_id") REFERENCES "image_cover"("image_cover_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "incidents" ADD CONSTRAINT "incidents_users_id_fkey" FOREIGN KEY ("users_id") REFERENCES "users"("user_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "image_cover" ADD CONSTRAINT "image_cover_image_description_id_fkey" FOREIGN KEY ("image_description_id") REFERENCES "image_description"("image_description_id") ON DELETE SET NULL ON UPDATE CASCADE;
