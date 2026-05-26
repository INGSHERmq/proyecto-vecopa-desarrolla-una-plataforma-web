import { CreateOrderDto } from './dto/create-order.dto';
import { OrdersService } from './orders.service';
export declare class OrdersController {
    private readonly orders;
    constructor(orders: OrdersService);
    findActive(): import(".prisma/client").Prisma.PrismaPromise<({
        items: ({
            product: {
                id: string;
                name: string;
                deletedAt: Date | null;
                createdAt: Date;
                updatedAt: Date;
                price: import("@prisma/client/runtime/library").Decimal;
                stock: number;
                active: boolean;
                categoryId: string;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            note: string | null;
            productId: string;
            quantity: number;
            unitPrice: import("@prisma/client/runtime/library").Decimal;
            orderId: string;
        })[];
        table: {
            id: string;
            name: string;
            deletedAt: Date | null;
            createdAt: Date;
            updatedAt: Date;
            status: import(".prisma/client").$Enums.TableStatus;
            capacity: number;
        };
        payments: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            amount: import("@prisma/client/runtime/library").Decimal;
            orderId: string;
            method: import(".prisma/client").$Enums.PaymentMethod;
            reference: string | null;
            confirmed: boolean;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: import(".prisma/client").$Enums.OrderStatus;
        tableId: string;
        waiter: string;
        notes: string | null;
    })[]>;
    create(dto: CreateOrderDto): Promise<{
        items: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            note: string | null;
            productId: string;
            quantity: number;
            unitPrice: import("@prisma/client/runtime/library").Decimal;
            orderId: string;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: import(".prisma/client").$Enums.OrderStatus;
        tableId: string;
        waiter: string;
        notes: string | null;
    }>;
    cancel(id: string): import(".prisma/client").Prisma.Prisma__OrderClient<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: import(".prisma/client").$Enums.OrderStatus;
        tableId: string;
        waiter: string;
        notes: string | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
}
