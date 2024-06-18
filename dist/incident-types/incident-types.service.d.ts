import { CreateIncidentTypeDto } from './dto/create-incident-type.dto';
import { UpdateIncidentTypeDto } from './dto/update-incident-type.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class IncidentTypesService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createIncidentTypeDto: CreateIncidentTypeDto): Promise<void>;
    findAll(): Promise<{
        type_incidents_id: number;
        description: string;
    }[]>;
    findOne(id: number): Promise<{
        type_incidents_id: number;
        description: string;
    }>;
    update(id: number, updateIncidentTypeDto: UpdateIncidentTypeDto): Promise<UpdateIncidentTypeDto>;
    remove(id: number): Promise<{
        type_incidents_id: number;
        description: string;
    }>;
}
