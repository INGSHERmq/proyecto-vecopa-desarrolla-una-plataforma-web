export declare enum PaymentMethodDto {
    YAPE = "YAPE",
    PLIN = "PLIN",
    EFECTIVO = "EFECTIVO"
}
export declare class CreatePaymentDto {
    orderId: string;
    method: PaymentMethodDto;
    amount: number;
    reference?: string;
    confirmed?: boolean;
}
