import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  BadRequestException,
  ParseIntPipe,
  NotFoundException,
  Put,
} from '@nestjs/common';
import { ImageCoverService } from './image-cover.service';
import { CreateImageCoverDto } from './dto/create-image-cover.dto';
import { UpdateImageCoverDto } from './dto/update-image-cover.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { renameImage } from './helper/image-description.helper';

@Controller('image-cover')
export class ImageCoverController {
  constructor(private readonly imageCoverService: ImageCoverService) {}

  @Post()
  @UseInterceptors(
    FileInterceptor('img_url', {
      storage: diskStorage({
        destination: './public/images/image-cover',
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
    const filePath = `/images/image-cover/${file.filename}`;
    const createImageCoverDto: CreateImageCoverDto = {
      img_url: filePath,
      description: body.description,
    };
    const savedImage = await this.imageCoverService.create(createImageCoverDto);
    return savedImage;
  }

  @Get()
  findAll() {
    return this.imageCoverService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const imageDescription = await this.imageCoverService.findOne(id);
    if (!imageDescription) {
      throw new NotFoundException(`imageDescription with id ${id} not found`);
    }
    return imageDescription;
  }

  @Put(':id')
  @UseInterceptors(
    FileInterceptor('img_url', {
      storage: diskStorage({
        destination: './public/images/image-cover',
        filename: renameImage,
      }),
    }),
  )
  async update(
    @UploadedFile() file: Express.Multer.File,
    @Param('id', ParseIntPipe) id: number,
    @Body() body: any,
  ) {
    try {
      let updateImageCoverDto: UpdateImageCoverDto = {
        description: body.description,
      };
      if (file) {
        const filePath = `/public/images/image-cover/${file.filename}`;
        updateImageCoverDto.img_url = filePath;
      }

      const ImageDescription = await this.imageCoverService.update(
        id,
        updateImageCoverDto,
      );
      if (!ImageDescription) {
        throw new NotFoundException(`ImageDescription with id ${id} not found`);
      }
      return ImageDescription;
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException(`ImageDescription with id ${id} not found`);
      }
      throw error;
    }
  }
  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    try {
      const imageDescription = await this.imageCoverService.remove(id);
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
