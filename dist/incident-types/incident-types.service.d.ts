import { CreateIncidentTypeDto } from './dto/create-incident-type.dto';
import { UpdateIncidentTypeDto } from './dto/update-incident-type.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class IncidentTypesService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createIncidentTypeDto: CreateIncidentTypeDto): import("@prisma/client").Prisma.Prisma__type_incidentsClient<{
        type_incidents_id: number;
        description: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): import("@prisma/client").Prisma.PrismaPromise<{
        type_incidents_id: number;
        description: string;
    }[]>;
    findOne(id: number): import("@prisma/client").Prisma.Prisma__type_incidentsClient<{
        type_incidents_id: number;
        description: string;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: number, updateIncidentTypeDto: UpdateIncidentTypeDto): import("@prisma/client").Prisma.Prisma__type_incidentsClient<{
        type_incidents_id: number;
        description: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: number): import("@prisma/client").Prisma.Prisma__type_incidentsClient<{
        type_incidents_id: number;
        description: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
