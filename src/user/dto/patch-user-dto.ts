import { IsEmail, IsOptional, IsString } from "class-validator"

export class PatchUserDto{
    @IsString()
    @IsOptional()
    readonly name : String
    @IsString()
    @IsOptional()
    readonly first_last_name : String
    @IsString()
    @IsOptional()
    readonly second_last_name : String
    @IsEmail()
    @IsOptional()
    readonly email : String
}