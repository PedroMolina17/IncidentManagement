import { Injectable } from '@nestjs/common';
import { CreateTypeUserDto } from './dto/create-type-user.dto';
import { UpdateTypeUserDto } from './dto/update-type-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TypeUsersService {
  constructor(private prisma: PrismaService) {}
  create(createTypeUserDto: CreateTypeUserDto) {
    return 'This action adds a new typeUser';
  }

  findAll() {
    return `This action returns all typeUsers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} typeUser`;
  }

  update(id: number, updateTypeUserDto: UpdateTypeUserDto) {
    return `This action updates a #${id} typeUser`;
  }

  remove(id: number) {
    return `This action removes a #${id} typeUser`;
  }
}
