import { ImageCoverService } from './image-cover.service';
import { CreateImageCoverDto } from './dto/create-image-cover.dto';
import { UpdateImageCoverDto } from './dto/update-image-cover.dto';
export declare class ImageCoverController {
    private readonly imageCoverService;
    constructor(imageCoverService: ImageCoverService);
    create(createImageCoverDto: CreateImageCoverDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateImageCoverDto: UpdateImageCoverDto): string;
    remove(id: string): string;
}
