import { CreateImageDescriptionDto } from './dto/create-image-description.dto';
import { UpdateImageDescriptionDto } from './dto/update-image-description.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class ImageDescriptionService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createImageDescriptionDto: CreateImageDescriptionDto): import("@prisma/client").Prisma.Prisma__image_descriptionClient<{
        image_description_id: number;
        img_url: string;
        description: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): Promise<{
        image_description_id: number;
        img_url: string;
        description: string;
    }[]>;
    findOne(id: number): string;
    update(id: number, updateImageDescriptionDto: UpdateImageDescriptionDto): string;
    remove(id: number): string;
}
