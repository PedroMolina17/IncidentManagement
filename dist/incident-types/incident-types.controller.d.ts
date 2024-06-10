import { IncidentTypesService } from './incident-types.service';
import { CreateIncidentTypeDto } from './dto/create-incident-type.dto';
import { UpdateIncidentTypeDto } from './dto/update-incident-type.dto';
export declare class IncidentTypesController {
    private readonly incidentTypesService;
    constructor(incidentTypesService: IncidentTypesService);
    create(createIncidentTypeDto: CreateIncidentTypeDto): Promise<void>;
    findAll(): Promise<void>;
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
