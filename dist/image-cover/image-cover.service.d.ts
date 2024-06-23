import { CreateImageCoverDto } from './dto/create-image-cover.dto';
import { UpdateImageCoverDto } from './dto/update-image-cover.dto';
export declare class ImageCoverService {
    create(createImageCoverDto: CreateImageCoverDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateImageCoverDto: UpdateImageCoverDto): string;
    remove(id: number): string;
}
