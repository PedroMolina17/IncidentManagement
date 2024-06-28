import { IncidentsService } from './incidents.service';
import { CreateIncidentDto } from './dto/create-incident.dto';
import { UpdateIncidentDto } from './dto/update-incident.dto';
export declare class IncidentsController {
    private readonly incidentsService;
    constructor(incidentsService: IncidentsService);
    create(createIncidentDto: CreateIncidentDto): Promise<{
        incidents_id: number;
        title: string;
        description: string;
        ubication: string;
        date: Date;
        status_id: number;
        type_incidents_id: number;
        image_cover_id: number;
        users_id: number;
    }>;
    findAll(): Promise<{
        incidents_id: number;
        title: string;
        description: string;
        ubication: string;
        date: Date;
        status_id: number;
        type_incidents_id: number;
        image_cover_id: number;
        users_id: number;
    }[]>;
    findOne(id: string): Promise<{
        incidents_id: number;
        title: string;
        description: string;
        ubication: string;
        date: Date;
        status_id: number;
        type_incidents_id: number;
        image_cover_id: number;
        users_id: number;
    }>;
    update(id: string, updateIncidentDto: UpdateIncidentDto): Promise<{
        incidents_id: number;
        title: string;
        description: string;
        ubication: string;
        date: Date;
        status_id: number;
        type_incidents_id: number;
        image_cover_id: number;
        users_id: number;
    }>;
    remove(id: string): Promise<{
        incidents_id: number;
        title: string;
        description: string;
        ubication: string;
        date: Date;
        status_id: number;
        type_incidents_id: number;
        image_cover_id: number;
        users_id: number;
    }>;
}
