import { IsNumber, IsString } from "class-validator"

export class PostProductDto{

    @IsString()
    readonly product: String
    @IsNumber()
    readonly price: Number
    @IsString()
    readonly category:String 
}
