import { Module } from '@nestjs/common';
import { IncidentsService } from './incidents.service';
import { IncidentsController } from './incidents.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [IncidentsController],
  providers: [IncidentsService],
  imports: [PrismaModule],
})
export class IncidentsModule {}
