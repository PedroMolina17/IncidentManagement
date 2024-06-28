/// <reference types="multer" />
import { ImageCoverService } from './image-cover.service';
export declare class ImageCoverController {
    private readonly imageCoverService;
    constructor(imageCoverService: ImageCoverService);
    postImageDescription(file: Express.Multer.File, body: any): Promise<{
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
    update(file: Express.Multer.File, id: number, body: any): Promise<{
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
