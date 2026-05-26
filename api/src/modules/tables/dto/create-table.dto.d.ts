export declare enum TableStatusDto {
    libre = "libre",
    ocupada = "ocupada",
    reservada = "reservada"
}
export declare class CreateTableDto {
    name: string;
    capacity: number;
    status?: TableStatusDto;
}
