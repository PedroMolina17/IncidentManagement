import { UsersService } from './../users/users.service';
import { loginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private UsersService;
    private jwtService;
    constructor(UsersService: UsersService, jwtService: JwtService);
    validateUser(data: loginDto): Promise<{
        typeusers: {
            type_user_id: number;
            description: string;
        };
        room: {
            room_id: number;
            name: string;
        };
        user_id: number;
        username: string;
        email: string;
        type_user_id: number;
        room_id: number;
    }>;
    login(user: any): Promise<{
        access_token: string;
    }>;
}
