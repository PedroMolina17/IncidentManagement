import { RoomService } from './room.service';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
export declare class RoomController {
    private readonly roomService;
    constructor(roomService: RoomService);
    create(createRoomDto: CreateRoomDto): Promise<void>;
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
