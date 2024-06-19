import { Injectable } from '@nestjs/common';
import { CreateImageDescriptionDto } from './dto/create-image-description.dto';
import { UpdateImageDescriptionDto } from './dto/update-image-description.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ImageDescriptionService {
  constructor(private prisma: PrismaService) {}

  create(createImageDescriptionDto: CreateImageDescriptionDto) {
    return this.prisma.image_description.create({
      data: createImageDescriptionDto,
    });
  }

  async findAll() {
    return await this.prisma.image_description.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} imageDescription`;
  }

  update(id: number, updateImageDescriptionDto: UpdateImageDescriptionDto) {
    return `This action updates a #${id} imageDescription`;
  }

  remove(id: number) {
    return `This action removes a #${id} imageDescription`;
  }
}
