import { CreateTypeUserDto } from './dto/create-type-user.dto';
import { UpdateTypeUserDto } from './dto/update-type-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class TypeUsersService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createTypeUserDto: CreateTypeUserDto): Promise<{
        type_user_id: number;
        description: string;
    }>;
    findAll(): Promise<{
        type_user_id: number;
        description: string;
    }[]>;
    findOne(id: number): Promise<{
        type_user_id: number;
        description: string;
    }>;
    update(id: number, data: UpdateTypeUserDto): Promise<UpdateTypeUserDto>;
    remove(id: number): Promise<{
        type_user_id: number;
        description: string;
    }>;
}
