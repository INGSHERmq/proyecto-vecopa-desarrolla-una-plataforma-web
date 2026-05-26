import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(dto: LoginDto): Promise<{
        accessToken: string;
        user: {
            id: string;
            name: string;
            email: string;
            role: import(".prisma/client").$Enums.RoleName;
        };
    }>;
    me(user: {
        uid: string;
        email?: string;
        name?: string;
    }): {
        id: string;
        email: string | undefined;
        name: string | undefined;
    };
}
