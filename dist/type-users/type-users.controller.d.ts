import { TypeUsersService } from './type-users.service';
import { CreateTypeUserDto } from './dto/create-type-user.dto';
import { UpdateTypeUserDto } from './dto/update-type-user.dto';
export declare class TypeUsersController {
    private readonly typeUsersService;
    constructor(typeUsersService: TypeUsersService);
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
