import { IsNumber, IsOptional, IsString } from "class-validator"

export class PatchProductDto{

    @IsString()
    @IsOptional()
    readonly product: String
    @IsNumber()
    @IsOptional()
    readonly price: Number
    @IsString()
    @IsOptional()
    readonly category:String 
}
