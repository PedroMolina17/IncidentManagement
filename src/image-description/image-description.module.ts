import { Module } from '@nestjs/common';
import { ImageDescriptionService } from './image-description.service';
import { ImageDescriptionController } from './image-description.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [ImageDescriptionController],
  providers: [ImageDescriptionService],
  imports: [PrismaModule],
})
export class ImageDescriptionModule {}
