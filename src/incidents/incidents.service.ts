import { PrismaService } from './../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateIncidentDto } from './dto/create-incident.dto';
import { UpdateIncidentDto } from './dto/update-incident.dto';

@Injectable()
export class IncidentsService {
  constructor(private prisma: PrismaService) {}
  async create(createIncidentDto: CreateIncidentDto) {
    return await this.prisma.incidents.create({ data: createIncidentDto });
  }

  async findAll() {
    return await this.prisma.incidents.findMany({
      include: { image_cover: true },
    });
  }

  async findOne(id: number) {
    return await this.prisma.incidents.findUnique({
      where: { incidents_id: id },
      include: { image_cover: { include: { image_description: true } } },
    });
  }

  async update(id: number, updateIncidentDto: UpdateIncidentDto) {
    return await this.prisma.incidents.update({
      where: { incidents_id: id },
      data: updateIncidentDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.incidents.delete({ where: { incidents_id: id } });
  }
}
