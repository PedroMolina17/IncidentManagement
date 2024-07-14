/// <reference types="multer" />
import { ImageDescriptionService } from './image-description.service';
import { CreateImageDescriptionDto } from './dto/create-image-description.dto';
import { UpdateImageDescriptionDto } from './dto/update-image-description.dto';
export declare class ImageDescriptionController {
    private readonly imageDescriptionService;
    constructor(imageDescriptionService: ImageDescriptionService);
    postImageDescription(file: Express.Multer.File, body: CreateImageDescriptionDto): Promise<{
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
    update(file: Express.Multer.File, id: number, body: any): Promise<UpdateImageDescriptionDto>;
    remove(id: number): Promise<{
        image_description_id: number;
        img_url: string;
        description: string;
        image_cover_id: number;
    }>;
}
