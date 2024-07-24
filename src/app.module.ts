import { Module } from '@nestjs/common';
import { IncidentTypesModule } from './incident-types/incident-types.module';
import { TypeUsersModule } from './type-users/type-users.module';
import { PrismaModule } from './prisma/prisma.module';
import { StatusModule } from './status/status.module';
import { UsersModule } from './users/users.module';
import { ImageDescriptionModule } from './image-description/image-description.module';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ImageCoverModule } from './image-cover/image-cover.module';
import { IncidentsModule } from './incidents/incidents.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { RoomModule } from './room/room.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    IncidentTypesModule,
    TypeUsersModule,
    PrismaModule,
    StatusModule,
    UsersModule,
    ImageDescriptionModule,
    ImageCoverModule,
    IncidentsModule,
    AuthModule,
    ConfigModule.forRoot({ isGlobal: true }),
    RoomModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
