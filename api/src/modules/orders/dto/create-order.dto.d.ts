export declare class CreateOrderItemDto {
    productId: string;
    quantity: number;
    note?: string;
}
export declare class CreateOrderDto {
    tableId: string;
    waiter: string;
    notes?: string;
    items: CreateOrderItemDto[];
}
