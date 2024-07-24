import { PrismaService } from './../prisma/prisma.service';
import { UpdateStatus2Dto } from './dto/update-status2.dto';
export declare class Status2Service {
    private PrismaService;
    constructor(PrismaService: PrismaService);
    create(createStatus2Dto: any): Promise<{
        status_id: number;
        description: string;
    }>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateStatus2Dto: UpdateStatus2Dto): string;
    remove(id: number): string;
}
