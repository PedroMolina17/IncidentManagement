import { UsersService } from './../users/users.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private UsersService;
    private jwtService;
    constructor(UsersService: UsersService, jwtService: JwtService);
    validateUser(email: string, pass: string): Promise<{
        user_id: number;
        username: string;
        email: string;
        type_user_id: number;
    }>;
    login(user: any): Promise<{
        access_token: string;
    }>;
}
