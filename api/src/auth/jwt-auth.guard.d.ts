import { CanActivate, ExecutionContext } from '@nestjs/common';
import { FirebaseAdminService } from './firebase-admin.service';
export declare class JwtAuthGuard implements CanActivate {
    private readonly firebaseAdmin;
    constructor(firebaseAdmin: FirebaseAdminService);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
