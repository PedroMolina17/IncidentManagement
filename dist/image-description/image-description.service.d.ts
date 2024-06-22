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
    }>;
    findAll(): Promise<{
        image_description_id: number;
        img_url: string;
        description: string;
    }[]>;
    findOne(id: number): Promise<{
        image_description_id: number;
        img_url: string;
        description: string;
    }>;
    update(id: number, updateImageDescriptionDto: UpdateImageDescriptionDto): Promise<{
        image_description_id: number;
        img_url: string;
        description: string;
    }>;
    remove(id: number): Promise<{
        image_description_id: number;
        img_url: string;
        description: string;
    }>;
}
