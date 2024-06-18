import { Injectable } from '@nestjs/common';
import { CreateIncidentTypeDto } from './dto/create-incident-type.dto';
import { UpdateIncidentTypeDto } from './dto/update-incident-type.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class IncidentTypesService {
  constructor(private prisma: PrismaService) {}
  async create(createIncidentTypeDto: CreateIncidentTypeDto) {
    await this.prisma.type_incidents.create({ data: createIncidentTypeDto });
  }

  async findAll() {
    return await this.prisma.type_incidents.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.type_incidents.findUnique({
      where: { type_incidents_id: id },
    });
  }

  async update(
    id: number,
    updateIncidentTypeDto: UpdateIncidentTypeDto,
  ): Promise<UpdateIncidentTypeDto> {
    return await this.prisma.type_incidents.update({
      where: { type_incidents_id: id },
      data: updateIncidentTypeDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.type_incidents.delete({
      where: { type_incidents_id: id },
    });
  }
}
