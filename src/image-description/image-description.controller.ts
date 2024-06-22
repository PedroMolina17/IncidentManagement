import { renameImage } from './helper/image-description.helper';
import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  BadRequestException,
  ParseIntPipe,
  NotFoundException,
} from '@nestjs/common';
import { ImageDescriptionService } from './image-description.service';
import { CreateImageDescriptionDto } from './dto/create-image-description.dto';
import { UpdateImageDescriptionDto } from './dto/update-image-description.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Controller('image-description')
export class ImageDescriptionController {
  constructor(
    private readonly imageDescriptionService: ImageDescriptionService,
  ) {}

  @Post()
  @UseInterceptors(
    FileInterceptor('img_url', {
      storage: diskStorage({
        destination: './public/images/image-description',
        filename: renameImage,
      }),
    }),
  )
  async postImageDescription(
    @UploadedFile() file: Express.Multer.File,
    @Body() body: any,
  ) {
    if (!file) {
      throw new BadRequestException('File is missing');
    }
    const filePath = `/images/image-description/${file.filename}`;
    const createImageDescriptionDto: CreateImageDescriptionDto = {
      img_url: filePath,
      description: body.description,
    };
    const savedImage = await this.imageDescriptionService.create(
      createImageDescriptionDto,
    );
    return savedImage;
  }

  @Get()
  async findAll() {
    return await this.imageDescriptionService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const imageDescription = await this.imageDescriptionService.findOne(id);
    if (!imageDescription) {
      throw new NotFoundException(`imageDescription with id ${id} not found`);
    }
    return imageDescription;
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateImageDescriptionDto: UpdateImageDescriptionDto,
  ) {
    return await this.imageDescriptionService.update(
      id,
      updateImageDescriptionDto,
    );
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    try {
      const imageDescription = await this.imageDescriptionService.remove(id);
      if (!imageDescription) {
        throw new NotFoundException(`ImageDescription with id ${id} not found`);
      }
      return imageDescription;
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException(`ImageDescription with id ${id} not found`);
      }
      throw error;
    }
  }
}
