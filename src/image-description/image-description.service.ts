import { Injectable } from '@nestjs/common';
import { CreateImageDescriptionDto } from './dto/create-image-description.dto';
import { UpdateImageDescriptionDto } from './dto/update-image-description.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ImageDescriptionService {
  constructor(private prisma: PrismaService) {}

  async create(createImageDescriptionDto: CreateImageDescriptionDto) {
    return await this.prisma.image_description.create({
      data: createImageDescriptionDto,
    });
  }

  async findAll() {
    return await this.prisma.image_description.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.image_description.findUnique({
      where: { image_description_id: id },
    });
  }

  async update(
    id: number,
    updateImageDescriptionDto: UpdateImageDescriptionDto,
  ) {
    return await this.prisma.image_description.update({
      where: { image_description_id: id },
      data: updateImageDescriptionDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.image_description.delete({
      where: { image_description_id: id },
    });
  }
}
