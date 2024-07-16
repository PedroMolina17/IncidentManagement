import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  NotFoundException,
} from '@nestjs/common';
import { RoomService } from './room.service';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';

@Controller('room')
export class RoomController {
  constructor(private readonly roomService: RoomService) {}

  @Post()
  async create(@Body() createRoomDto: CreateRoomDto) {
    try {
      await this.roomService.create(createRoomDto);
    } catch (error) {
      if (error.code === 'P2002') {
        throw new NotFoundException(
          `Room with name ${createRoomDto.name} already exists`,
        );
      }
    }
  }

  @Get()
  async findAll() {
    return await this.roomService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    try {
      const room = await this.roomService.findOne(id);
      if (!room) {
        throw new NotFoundException(`Room with id ${id} not found`);
      }
      return room;
    } catch (error) {
      throw error;
    }
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateRoomDto: UpdateRoomDto,
  ) {
    try {
      const room = await this.roomService.update(id, updateRoomDto);
      if (!room) {
        throw new NotFoundException(`incidentType with id ${id} not found`);
      }
      return room;
    } catch (error) {
      if (error.code === 'P2002') {
        throw new NotFoundException(
          `Room with name ${updateRoomDto.name} already exists`,
        );
      }
      if (error.code === 'P2025') {
        throw new NotFoundException(`Room with id ${id} not found`);
      }
      throw error;
    }
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    try {
      return await this.roomService.remove(id);
    } catch (error) {
      if ((error.code = 'P2025')) {
        throw new NotFoundException(`Room with id ${id} not found`);
      }
    }
  }
}
