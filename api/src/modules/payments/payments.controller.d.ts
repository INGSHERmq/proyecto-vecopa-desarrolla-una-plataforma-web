import { CreatePaymentDto } from './dto/create-payment.dto';
import { PaymentsService } from './payments.service';
export declare class PaymentsController {
    private readonly payments;
    constructor(payments: PaymentsService);
    findAll(): import(".prisma/client").Prisma.PrismaPromise<({
        order: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            status: import(".prisma/client").$Enums.OrderStatus;
            tableId: string;
            waiter: string;
            notes: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        amount: import("@prisma/client/runtime/library").Decimal;
        orderId: string;
        method: import(".prisma/client").$Enums.PaymentMethod;
        reference: string | null;
        confirmed: boolean;
    })[]>;
    create(dto: CreatePaymentDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        amount: import("@prisma/client/runtime/library").Decimal;
        orderId: string;
        method: import(".prisma/client").$Enums.PaymentMethod;
        reference: string | null;
        confirmed: boolean;
    }>;
}
