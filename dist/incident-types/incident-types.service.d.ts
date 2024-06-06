import { CreateIncidentTypeDto } from './dto/create-incident-type.dto';
import { UpdateIncidentTypeDto } from './dto/update-incident-type.dto';
export declare class IncidentTypesService {
    create(createIncidentTypeDto: CreateIncidentTypeDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateIncidentTypeDto: UpdateIncidentTypeDto): string;
    remove(id: number): string;
}
