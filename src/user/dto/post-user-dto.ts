import { IsEmail, IsString } from "class-validator"

export class PostUserDto{

    @IsString()
    readonly name : String
    @IsString()
    readonly first_last_name : String
    @IsString()
    readonly second_last_name : String
    @IsEmail()
    readonly email : String
    @IsString()
    readonly password : String
}