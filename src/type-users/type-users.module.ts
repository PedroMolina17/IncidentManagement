import { Module } from '@nestjs/common';
import { TypeUsersService } from './type-users.service';
import { TypeUsersController } from './type-users.controller';

@Module({
  controllers: [TypeUsersController],
  providers: [TypeUsersService],
})
export class TypeUsersModule {}
