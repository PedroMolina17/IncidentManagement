import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(createAuthDto: CreateAuthDto): Promise<any>;
    auth(createAuthDto: CreateAuthDto): Promise<any>;
    login(createAuthDto: CreateAuthDto): Promise<{
        access_token: string;
    }>;
}
