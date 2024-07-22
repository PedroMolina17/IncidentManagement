import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  NotFoundException,
  ParseIntPipe,
} from '@nestjs/common';
import { IncidentsService } from './incidents.service';
import { CreateIncidentDto } from './dto/create-incident.dto';
import { UpdateIncidentDto } from './dto/update-incident.dto';

@Controller('incidents')
export class IncidentsController {
  constructor(private readonly incidentsService: IncidentsService) {}

  @Post()
  async create(@Body() createIncidentDto: CreateIncidentDto) {
    try {
      return await this.incidentsService.create(createIncidentDto);
    } catch (error) {
      if (error.code) {
        throw new NotFoundException('Foreign Key does not exist');
      }
    }
  }

  @Get()
  async findAll() {
    return await this.incidentsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const incidentsService = await this.incidentsService.findOne(id);
    if (!incidentsService) {
      throw new NotFoundException(`Incident with id ${id} not found`);
    }
    return incidentsService;
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateIncidentDto: UpdateIncidentDto,
  ) {
    try {
      const incidentsService = await this.incidentsService.update(
        id,
        updateIncidentDto,
      );
      return incidentsService;
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
      return await this.incidentsService.remove(+id);
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException(`Status with id ${id} not found`);
      }
    }
  }
}
