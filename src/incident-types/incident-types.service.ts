import { Injectable } from '@nestjs/common';
import { CreateIncidentTypeDto } from './dto/create-incident-type.dto';
import { UpdateIncidentTypeDto } from './dto/update-incident-type.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class IncidentTypesService {
  constructor(private prisma: PrismaService) {}
  create(createIncidentTypeDto: CreateIncidentTypeDto) {
    return this.prisma.type_incidents.create({ data: createIncidentTypeDto });
  }

  findAll() {
    return this.prisma.type_incidents.findMany();
  }

  findOne(id: number) {
    return this.prisma.type_incidents.findUnique({
      where: { type_incidents_id: id },
    });
  }

  update(id: number, updateIncidentTypeDto: UpdateIncidentTypeDto) {
    return this.prisma.type_incidents.update({
      where: { type_incidents_id: id },
      data: updateIncidentTypeDto,
    });
  }

  remove(id: number) {
    return this.prisma.type_incidents.delete({
      where: { type_incidents_id: id },
    });
  }
}
