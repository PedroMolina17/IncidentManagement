import { IncidentTypesService } from './incident-types.service';
import { CreateIncidentTypeDto } from './dto/create-incident-type.dto';
import { UpdateIncidentTypeDto } from './dto/update-incident-type.dto';
export declare class IncidentTypesController {
    private readonly incidentTypesService;
    constructor(incidentTypesService: IncidentTypesService);
    create(createIncidentTypeDto: CreateIncidentTypeDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateIncidentTypeDto: UpdateIncidentTypeDto): string;
    remove(id: string): string;
}
