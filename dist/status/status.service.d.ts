import { CreateStatusDto } from './dto/create-status.dto';
import { UpdateStatusDto } from './dto/update-status.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class StatusService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createStatusDto: CreateStatusDto): import("@prisma/client").Prisma.Prisma__statusClient<{
        status_id: number;
        description: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): import("@prisma/client").Prisma.PrismaPromise<{
        status_id: number;
        description: string;
    }[]>;
    findOne(id: number): import("@prisma/client").Prisma.Prisma__statusClient<{
        status_id: number;
        description: string;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: number, updateStatusDto: UpdateStatusDto): import("@prisma/client").Prisma.Prisma__statusClient<{
        status_id: number;
        description: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: number): import("@prisma/client").Prisma.Prisma__statusClient<{
        status_id: number;
        description: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
