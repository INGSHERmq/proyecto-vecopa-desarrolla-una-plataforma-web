export declare enum TransactionTypeDto {
    ingreso = "ingreso",
    egreso = "egreso"
}
export declare class CreateTransactionDto {
    cashRegisterId: string;
    type: TransactionTypeDto;
    amount: number;
    note: string;
}
