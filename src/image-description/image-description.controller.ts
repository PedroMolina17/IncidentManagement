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
    @Body() body: CreateImageDescriptionDto,
  ) {
    try {
      if (!file) {
        throw new BadRequestException('File is missing');
      }
      const filePath = `/images/image-description/${file.filename}`;
      const createImageDescriptionDto: CreateImageDescriptionDto = {
        img_url: filePath,
        description: body.description,
        image_cover_id: Number(body.image_cover_id),
      };
      const savedImage = await this.imageDescriptionService.create(
        createImageDescriptionDto,
      );
      return savedImage;
    } catch (error) {
      if (error.code === 'P2003') {
        throw new BadRequestException(`The ImageCover ID does not exist`);
      }
      throw error;
    }
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
      let updateImageDescriptionDto: UpdateImageDescriptionDto = {
        description: body.description,
        image_cover_id: Number(body.image_cover_id),
      };
      if (file) {
        const filePath = `/public/images/image-cover/${file.filename}`;
        updateImageDescriptionDto.img_url = filePath;
      }

      const ImageDescription = await this.imageDescriptionService.update(
        id,
        updateImageDescriptionDto,
      );
      if (!ImageDescription) {
        throw new NotFoundException(`ImageDescription with id ${id} not found`);
      }
      return ImageDescription;
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException(`ImageDescription with id ${id} not found`);
      } else if (error.code === 'P2003') {
        throw new BadRequestException(
          `ImageCover with id ${body.image_cover_id} not found`,
        );
      }
      throw error;
    }
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
