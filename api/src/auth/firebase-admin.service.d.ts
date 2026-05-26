import { ConfigService } from '@nestjs/config';
export declare class FirebaseAdminService {
    private readonly config;
    constructor(config: ConfigService);
    verifyIdToken(token: string): Promise<import("firebase-admin/auth").DecodedIdToken>;
}
