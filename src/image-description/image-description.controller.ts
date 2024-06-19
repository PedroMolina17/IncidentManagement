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
    const filePath = `/public/images/image-description/${file.filename}`;
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
  findOne(@Param('id') id: string) {
    return this.imageDescriptionService.findOne(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateImageDescriptionDto: UpdateImageDescriptionDto,
  ) {
    return this.imageDescriptionService.update(+id, updateImageDescriptionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.imageDescriptionService.remove(+id);
  }
}
