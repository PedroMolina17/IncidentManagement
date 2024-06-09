import { IncidentTypesService } from './incident-types.service';
import { CreateIncidentTypeDto } from './dto/create-incident-type.dto';
import { UpdateIncidentTypeDto } from './dto/update-incident-type.dto';
export declare class IncidentTypesController {
    private readonly incidentTypesService;
    constructor(incidentTypesService: IncidentTypesService);
    create(createIncidentTypeDto: CreateIncidentTypeDto): import("@prisma/client").Prisma.Prisma__type_incidentsClient<{
        type_incidents_id: number;
        description: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): import("@prisma/client").Prisma.PrismaPromise<{
        type_incidents_id: number;
        description: string;
    }[]>;
    findOne(id: number): Promise<{
        type_incidents_id: number;
        description: string;
    }>;
    update(id: number, updateIncidentTypeDto: UpdateIncidentTypeDto): Promise<{
        type_incidents_id: number;
        description: string;
    }>;
    remove(id: number): Promise<{
        type_incidents_id: number;
        description: string;
    }>;
}
