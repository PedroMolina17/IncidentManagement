import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  async create(createUserDto: CreateUserDto) {
    const password = await bcrypt.hashSync(createUserDto.password, 10);
    const userData = { ...createUserDto, password };
    return await this.prisma.users.create({ data: userData });
  }

  async count(): Promise<number> {
    return await this.prisma.users.count({ where: { type_user_id: 1 } });
  }

  async findAll(filters?: any) {
    const where: any = {};
    if (filters.username) {
      where.username = { contains: filters.username };
    }
    if (filters.email) {
      where.email = { contains: filters.email };
    }

    return await this.prisma.users.findMany({ where });
  }

  async findOne(id: number) {
    return await this.prisma.users.findUnique({ where: { user_id: id } });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return await this.prisma.users.update({
      where: { user_id: id },
      data: updateUserDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.users.delete({ where: { user_id: id } });
  }

  async findOneByEmail(email: string) {
    return this.prisma.users.findUnique({
      where: { email },
    });
  }
}
