import { Module } from '@nestjs/common';
import { TypeUsersService } from './type-users.service';
import { TypeUsersController } from './type-users.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [TypeUsersController],
  providers: [TypeUsersService],
  imports: [PrismaModule],
})
export class TypeUsersModule {}
