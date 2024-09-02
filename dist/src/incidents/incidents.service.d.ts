import { PrismaService } from './../prisma/prisma.service';
import { CreateIncidentDto } from './dto/create-incident.dto';
import { UpdateIncidentDto } from './dto/update-incident.dto';
export declare class IncidentsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createIncidentDto: CreateIncidentDto): Promise<{
        incidents_id: number;
        title: string;
        description: string;
        date: Date;
        status_id: number;
        type_incidents_id: number;
        room_id: number;
    }>;
    findAll(): Promise<({
        image_cover: {
            image_cover_id: number;
            img_url: string;
            description: string;
            incidents_id: number;
        }[];
    } & {
        incidents_id: number;
        title: string;
        description: string;
        date: Date;
        status_id: number;
        type_incidents_id: number;
        room_id: number;
    })[]>;
    findOne(id: number): Promise<{
        image_cover: ({
            image_description: {
                image_description_id: number;
                img_url: string;
                description: string;
                image_cover_id: number;
            }[];
        } & {
            image_cover_id: number;
            img_url: string;
            description: string;
            incidents_id: number;
        })[];
    } & {
        incidents_id: number;
        title: string;
        description: string;
        date: Date;
        status_id: number;
        type_incidents_id: number;
        room_id: number;
    }>;
    update(id: number, updateIncidentDto: UpdateIncidentDto): Promise<{
        incidents_id: number;
        title: string;
        description: string;
        date: Date;
        status_id: number;
        type_incidents_id: number;
        room_id: number;
    }>;
    remove(id: number): Promise<{
        incidents_id: number;
        title: string;
        description: string;
        date: Date;
        status_id: number;
        type_incidents_id: number;
        room_id: number;
    }>;
}
