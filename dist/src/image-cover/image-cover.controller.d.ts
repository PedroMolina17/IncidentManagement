/// <reference types="multer" />
import { ImageCoverService } from './image-cover.service';
import { CreateImageCoverDto } from './dto/create-image-cover.dto';
import { UpdateImageCoverDto } from './dto/update-image-cover.dto';
export declare class ImageCoverController {
    private readonly imageCoverService;
    constructor(imageCoverService: ImageCoverService);
    postImageDescription(file: Express.Multer.File, body: CreateImageCoverDto): Promise<{
        image_cover_id: number;
        img_url: string;
        description: string;
        incidents_id: number;
    }>;
    findAll(): Promise<{
        image_cover_id: number;
        img_url: string;
        description: string;
        incidents_id: number;
    }[]>;
    findOne(id: number): Promise<{
        image_cover_id: number;
        img_url: string;
        description: string;
        incidents_id: number;
    }>;
    update(file: Express.Multer.File, id: number, body: UpdateImageCoverDto): Promise<{
        image_cover_id: number;
        img_url: string;
        description: string;
        incidents_id: number;
    }>;
    remove(id: number): Promise<{
        image_cover_id: number;
        img_url: string;
        description: string;
        incidents_id: number;
    }>;
}
