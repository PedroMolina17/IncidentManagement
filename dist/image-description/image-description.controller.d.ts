/// <reference types="multer" />
import { ImageDescriptionService } from './image-description.service';
import { UpdateImageDescriptionDto } from './dto/update-image-description.dto';
export declare class ImageDescriptionController {
    private readonly imageDescriptionService;
    constructor(imageDescriptionService: ImageDescriptionService);
    postImageDescription(file: Express.Multer.File, body: any): Promise<{
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
