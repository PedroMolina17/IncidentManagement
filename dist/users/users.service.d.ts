import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createUserDto: CreateUserDto): Promise<{
        user_id: number;
        username: string;
        email: string;
        password: string;
        type_user_id: number;
        room_id: number;
    }>;
    count(filters?: any): Promise<number>;
    findAll(filters?: any): Promise<{
        user_id: number;
        username: string;
        email: string;
        password: string;
        type_user_id: number;
        room_id: number;
    }[]>;
    findOne(id: number): Promise<{
        user_id: number;
        username: string;
        email: string;
        password: string;
        type_user_id: number;
        room_id: number;
    }>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<{
        user_id: number;
        username: string;
        email: string;
        password: string;
        type_user_id: number;
        room_id: number;
    }>;
    remove(id: number): Promise<{
        user_id: number;
        username: string;
        email: string;
        password: string;
        type_user_id: number;
        room_id: number;
    }>;
    findOneByEmail(email: string): Promise<{
        user_id: number;
        username: string;
        email: string;
        password: string;
        type_user_id: number;
        room_id: number;
    }>;
}
