import { IsNumber, IsPositive, IsString } from "class-validator"

export class CreateProductDto {
    @IsString()
    product : string
    @IsNumber()
    @IsPositive()
    price : number
    @IsString()
    category : string
    @IsString()
    description: string
    @IsNumber()
    quantity : number
}
