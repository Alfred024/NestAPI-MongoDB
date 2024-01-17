import { IsNumber, IsUUID } from "class-validator";
import { UUID } from "mongodb";

export class CreateOrderDto {
    //@IsUUID()
    @IsNumber()
    readonly id_user : Number;
}
