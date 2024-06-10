import { StatusService } from './status.service';
import { CreateStatusDto } from './dto/create-status.dto';
import { UpdateStatusDto } from './dto/update-status.dto';
export declare class StatusController {
    private readonly statusService;
    constructor(statusService: StatusService);
    create(createStatusDto: CreateStatusDto): import("@prisma/client").Prisma.Prisma__statusClient<{
        status_id: number;
        description: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): import("@prisma/client").Prisma.PrismaPromise<{
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
