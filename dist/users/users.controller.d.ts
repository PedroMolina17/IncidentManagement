import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<{
        user_id: number;
        username: string;
        email: string;
        password: string;
        type_user_id: number;
    }>;
    findAll(query: any): Promise<{
        user_id: number;
        username: string;
        email: string;
        password: string;
        type_user_id: number;
    }[]>;
    countAll(): Promise<number>;
    findOne(id: number): Promise<{
        user_id: number;
        username: string;
        email: string;
        password: string;
        type_user_id: number;
    }>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<{
        user_id: number;
        username: string;
        email: string;
        password: string;
        type_user_id: number;
    }>;
    remove(id: number): Promise<{
        user_id: number;
        username: string;
        email: string;
        password: string;
        type_user_id: number;
    }>;
}
