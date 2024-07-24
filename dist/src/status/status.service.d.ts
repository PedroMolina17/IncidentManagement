import { CreateStatusDto } from './dto/create-status.dto';
import { UpdateStatusDto } from './dto/update-status.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class StatusService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createStatusDto: CreateStatusDto): Promise<{
        status_id: number;
        description: string;
    }>;
    findAll(): Promise<{
        status_id: number;
        description: string;
    }[]>;
    findOne(id: number): Promise<{
        status_id: number;
        description: string;
    }>;
    update(id: number, updateStatusDto: UpdateStatusDto): Promise<{
        status_id: number;
        description: string;
    }>;
    remove(id: number): Promise<{
        status_id: number;
        description: string;
    }>;
}
