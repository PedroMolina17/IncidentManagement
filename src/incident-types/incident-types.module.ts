import { Module } from '@nestjs/common';
import { IncidentTypesService } from './incident-types.service';
import { IncidentTypesController } from './incident-types.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [IncidentTypesController],
  providers: [IncidentTypesService],
  imports: [PrismaModule],
})
export class IncidentTypesModule {}
