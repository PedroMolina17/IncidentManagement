import { Module } from '@nestjs/common';
import { IncidentTypesModule } from './incident-types/incident-types.module';

@Module({
  imports: [IncidentTypesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
