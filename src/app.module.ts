import { Module } from '@nestjs/common';
import { IncidentTypesModule } from './incident-types/incident-types.module';
import { TypeUsersModule } from './type-users/type-users.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [IncidentTypesModule, TypeUsersModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
