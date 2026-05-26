import { PrismaService } from '../../database/prisma.service';
import { CreateCashRegisterDto } from './dto/create-cash-register.dto';
import { CreateTransactionDto } from './dto/create-transaction.dto';
export declare class CashService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(): import(".prisma/client").Prisma.PrismaPromise<({
        transactions: {
            id: string;
            createdAt: Date;
            cashRegisterId: string;
            type: import(".prisma/client").$Enums.TransactionType;
            amount: import("@prisma/client/runtime/library").Decimal;
            note: string;
        }[];
    } & {
        id: string;
        openedBy: string;
        openingAmount: import("@prisma/client/runtime/library").Decimal;
        closingAmount: import("@prisma/client/runtime/library").Decimal | null;
        status: import(".prisma/client").$Enums.CashRegisterStatus;
        openedAt: Date;
        closedAt: Date | null;
    })[]>;
    open(dto: CreateCashRegisterDto): import(".prisma/client").Prisma.Prisma__CashRegisterClient<{
        transactions: {
            id: string;
            createdAt: Date;
            cashRegisterId: string;
            type: import(".prisma/client").$Enums.TransactionType;
            amount: import("@prisma/client/runtime/library").Decimal;
            note: string;
        }[];
    } & {
        id: string;
        openedBy: string;
        openingAmount: import("@prisma/client/runtime/library").Decimal;
        closingAmount: import("@prisma/client/runtime/library").Decimal | null;
        status: import(".prisma/client").$Enums.CashRegisterStatus;
        openedAt: Date;
        closedAt: Date | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    addTransaction(dto: CreateTransactionDto): import(".prisma/client").Prisma.Prisma__TransactionClient<{
        id: string;
        createdAt: Date;
        cashRegisterId: string;
        type: import(".prisma/client").$Enums.TransactionType;
        amount: import("@prisma/client/runtime/library").Decimal;
        note: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    close(id: string, closingAmount: number): import(".prisma/client").Prisma.Prisma__CashRegisterClient<{
        transactions: {
            id: string;
            createdAt: Date;
            cashRegisterId: string;
            type: import(".prisma/client").$Enums.TransactionType;
            amount: import("@prisma/client/runtime/library").Decimal;
            note: string;
        }[];
    } & {
        id: string;
        openedBy: string;
        openingAmount: import("@prisma/client/runtime/library").Decimal;
        closingAmount: import("@prisma/client/runtime/library").Decimal | null;
        status: import(".prisma/client").$Enums.CashRegisterStatus;
        openedAt: Date;
        closedAt: Date | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
}
