import { Injectable } from '@nestjs/common';
import { CreateTypeUserDto } from './dto/create-type-user.dto';
import { UpdateTypeUserDto } from './dto/update-type-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TypeUsersService {
  constructor(private prisma: PrismaService) {}

  async create(createTypeUserDto: CreateTypeUserDto) {
    return await this.prisma.typeusers.create({ data: createTypeUserDto });
  }

  async findAll() {
    return await this.prisma.typeusers.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.typeusers.findUnique({
      where: { type_user_id: id },
    });
  }

  async update(
    id: number,
    data: UpdateTypeUserDto,
  ): Promise<UpdateTypeUserDto> {
    return await this.prisma.typeusers.update({
      where: { type_user_id: id },
      data: data,
    });
  }

  async remove(id: number) {
    return await this.prisma.typeusers.delete({ where: { type_user_id: id } });
  }
}
