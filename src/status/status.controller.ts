import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  ParseIntPipe,
  NotFoundException,
} from '@nestjs/common';
import { StatusService } from './status.service';
import { CreateStatusDto } from './dto/create-status.dto';
import { UpdateStatusDto } from './dto/update-status.dto';

@Controller('status')
export class StatusController {
  constructor(private readonly statusService: StatusService) {}

  @Post()
  create(@Body() createStatusDto: CreateStatusDto) {
    return this.statusService.create(createStatusDto);
  }

  @Get()
  findAll() {
    return this.statusService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const status = await this.statusService.findOne(id);
    if (!status) {
      throw new NotFoundException(`status with id ${id} not found`);
    }
    return status;
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateStatusDto: UpdateStatusDto,
  ) {
    try {
      const status = await this.statusService.update(id, updateStatusDto);
      if (!status) {
        throw new NotFoundException(`Status with id ${id} not found`);
      }
      return status;
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException(`Status with id ${id} not found`);
      }
      throw error;
    }
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    try {
      const status = await this.statusService.remove(id);
      if (!status) {
        throw new NotFoundException(`Status with id ${id} not found`);
      }
      return status;
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException(`Status with id ${id} not found`);
      }
      throw error;
    }
  }
}
