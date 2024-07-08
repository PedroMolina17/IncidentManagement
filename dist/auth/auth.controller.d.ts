import { AuthService } from './auth.service';
import { loginDto } from './dto/login.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(body: loginDto): Promise<{
        access_token: string;
    }>;
}
