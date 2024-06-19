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
    }>;
    findAll(): Promise<{
        image_description_id: number;
        img_url: string;
        description: string;
    }[]>;
    findOne(id: string): string;
    update(id: string, updateImageDescriptionDto: UpdateImageDescriptionDto): string;
    remove(id: string): string;
}
