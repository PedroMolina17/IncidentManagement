import { CreateImageDescriptionDto } from './dto/create-image-description.dto';
import { UpdateImageDescriptionDto } from './dto/update-image-description.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class ImageDescriptionService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createImageDescriptionDto: CreateImageDescriptionDto): Promise<{
        image_description_id: number;
        img_url: string;
        description: string;
        image_cover_id: number;
    }>;
    findAll(): Promise<{
        image_description_id: number;
        img_url: string;
        description: string;
        image_cover_id: number;
    }[]>;
    findOne(id: number): Promise<{
        image_description_id: number;
        img_url: string;
        description: string;
        image_cover_id: number;
    }>;
    update(id: number, updateImageDescriptionDto: UpdateImageDescriptionDto): Promise<UpdateImageDescriptionDto>;
    remove(id: number): Promise<{
        image_description_id: number;
        img_url: string;
        description: string;
        image_cover_id: number;
    }>;
}
