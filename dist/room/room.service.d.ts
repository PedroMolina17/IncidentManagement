import { PrismaService } from './../prisma/prisma.service';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
export declare class RoomService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createRoomDto: CreateRoomDto): Promise<{
        room_id: number;
        name: string;
    }>;
    findAll(): Promise<{
        room_id: number;
        name: string;
    }[]>;
    findOne(id: number): Promise<{
        room_id: number;
        name: string;
    }>;
    update(id: number, updateRoomDto: UpdateRoomDto): Promise<{
        room_id: number;
        name: string;
    }>;
    remove(id: number): Promise<{
        room_id: number;
        name: string;
    }>;
}
