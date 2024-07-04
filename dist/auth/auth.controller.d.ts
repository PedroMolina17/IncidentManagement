import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(createAuthDto: CreateAuthDto): string;
    auth(createAuthDto: CreateAuthDto): string;
    login(createAuthDto: CreateAuthDto): string;
}
