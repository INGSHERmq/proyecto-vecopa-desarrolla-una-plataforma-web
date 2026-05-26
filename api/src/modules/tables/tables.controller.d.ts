import { CreateTableDto, TableStatusDto } from './dto/create-table.dto';
import { TablesService } from './tables.service';
export declare class TablesController {
    private readonly tables;
    constructor(tables: TablesService);
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: string;
        name: string;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        status: import(".prisma/client").$Enums.TableStatus;
        capacity: number;
    }[]>;
    create(dto: CreateTableDto): import(".prisma/client").Prisma.Prisma__DiningTableClient<{
        id: string;
        name: string;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        status: import(".prisma/client").$Enums.TableStatus;
        capacity: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    setStatus(id: string, status: TableStatusDto): import(".prisma/client").Prisma.Prisma__DiningTableClient<{
        id: string;
        name: string;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        status: import(".prisma/client").$Enums.TableStatus;
        capacity: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
}
