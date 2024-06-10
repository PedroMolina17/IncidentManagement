import { Injectable } from '@nestjs/common';
import { CreateStatusDto } from './dto/create-status.dto';
import { UpdateStatusDto } from './dto/update-status.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class StatusService {
  constructor(private prisma: PrismaService) {}
  create(createStatusDto: CreateStatusDto) {
    return this.prisma.status.create({ data: createStatusDto });
  }

  findAll() {
    return this.prisma.status.findMany();
  }

  findOne(id: number) {
    return this.prisma.status.findUnique({ where: { status_id: id } });
  }

  update(id: number, updateStatusDto: UpdateStatusDto) {
    return this.prisma.status.update({
      where: { status_id: id },
      data: updateStatusDto,
    });
  }

  remove(id: number) {
    return this.prisma.status.delete({ where: { status_id: id } });
  }
}
