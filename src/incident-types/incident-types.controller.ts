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
import { IncidentTypesService } from './incident-types.service';
import { CreateIncidentTypeDto } from './dto/create-incident-type.dto';
import { UpdateIncidentTypeDto } from './dto/update-incident-type.dto';

@Controller('incident-types')
export class IncidentTypesController {
  constructor(private readonly incidentTypesService: IncidentTypesService) {}

  @Post()
  create(@Body() createIncidentTypeDto: CreateIncidentTypeDto) {
    return this.incidentTypesService.create(createIncidentTypeDto);
  }

  @Get()
  findAll() {
    return this.incidentTypesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const incidentType = await this.incidentTypesService.findOne(id);
    if (!incidentType) {
      throw new NotFoundException(`incidentType with id ${id} not found`);
    }
    return incidentType;
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateIncidentTypeDto: UpdateIncidentTypeDto,
  ) {
    try {
      const updateIncidentType = await this.incidentTypesService.update(
        id,
        updateIncidentTypeDto,
      );
      if (!updateIncidentType) {
        throw new NotFoundException(`incidentType with id ${id} not found`);
      }
      return updateIncidentType;
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException(`incidentType with id ${id} not found`);
      }
      throw error;
    }
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    try {
      const deleteIncidentType = await this.incidentTypesService.remove(id);
      if (!deleteIncidentType) {
        throw new NotFoundException(`incidentType with id ${id} not found`);
      }
      return deleteIncidentType;
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException(`incidentType with id ${id} not found`);
      }
      throw error;
    }
  }
}
