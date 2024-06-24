import { Injectable } from '@nestjs/common';
import { CreateImageCoverDto } from './dto/create-image-cover.dto';
import { UpdateImageCoverDto } from './dto/update-image-cover.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ImageCoverService {
  constructor(private prisma: PrismaService) {}

  async create(createImageCoverDto: CreateImageCoverDto) {
    return await this.prisma.image_cover.create({ data: createImageCoverDto });
  }

  async findAll() {
    return await this.prisma.image_cover.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.image_cover.findUnique({
      where: { image_cover_id: id },
    });
  }

  async update(id: number, updateImageCoverDto: UpdateImageCoverDto) {
    return await this.prisma.image_cover.update({
      where: { image_cover_id: id },
      data: updateImageCoverDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.image_cover.delete({
      where: { image_cover_id: id },
    });
  }
}
