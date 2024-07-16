import { PrismaService } from './../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';

@Injectable()
export class RoomService {
  constructor(private prisma: PrismaService) {}
  async create(createRoomDto: CreateRoomDto) {
    return await this.prisma.room.create({ data: createRoomDto });
  }

  async findAll() {
    return await this.prisma.room.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.room.findUnique({ where: { room_id: id } });
  }

  async update(id: number, updateRoomDto: UpdateRoomDto) {
    return await this.prisma.room.update({
      where: { room_id: id },
      data: updateRoomDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.room.delete({ where: { room_id: id } });
  }
}
