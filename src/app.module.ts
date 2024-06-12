import { Module } from '@nestjs/common';
import { IncidentTypesModule } from './incident-types/incident-types.module';
import { TypeUsersModule } from './type-users/type-users.module';
import { PrismaModule } from './prisma/prisma.module';
import { StatusModule } from './status/status.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [IncidentTypesModule, TypeUsersModule, PrismaModule, StatusModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
