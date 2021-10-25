import { DecimalPipe } from "@angular/common";

export class T01Solicitud{
    id!: number;
    estado!:number;
    fechaIngreso!:string;
    monto!:DecimalPipe;
    idCliente!:string;

}