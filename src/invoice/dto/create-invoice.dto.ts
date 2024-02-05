import { ApiProperty } from "@nestjs/swagger";

export class CreateInvoiceDto {

    @ApiProperty({example: 'VentasClientes_23'})
    username: string;

    @ApiProperty({example: 'EMpory_93@gmail.com'})
    email: string;

    @ApiProperty({example: 'passwordFito'})
    password: string;

    @ApiProperty({example: 'Av.Antonio Ricaurte'})
    LastSee: number;

}

