import { CreateImageCoverDto } from './dto/create-image-cover.dto';
import { UpdateImageCoverDto } from './dto/update-image-cover.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class ImageCoverService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createImageCoverDto: CreateImageCoverDto): Promise<{
        image_cover_id: number;
        img_url: string;
        description: string;
    }>;
    findAll(): Promise<{
        image_cover_id: number;
        img_url: string;
        description: string;
    }[]>;
    findOne(id: number): Promise<{
        image_cover_id: number;
        img_url: string;
        description: string;
    }>;
    update(id: number, updateImageCoverDto: UpdateImageCoverDto): Promise<{
        image_cover_id: number;
        img_url: string;
        description: string;
    }>;
    remove(id: number): Promise<{
        image_cover_id: number;
        img_url: string;
        description: string;
    }>;
}
