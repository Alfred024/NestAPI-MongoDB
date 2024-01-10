import { Body, Controller, Get, Param, ParseUUIDPipe, Patch, Post, Delete } from "@nestjs/common";
import { PostUserDto, PatchUserDto } from "./dto/index";
import { UserService } from "./user.service";

@Controller('user')
export class UserController{

    constructor(
        readonly userService : UserService
    ){}

    @Get()
    getUsers(){
        return this.userService.findAll();
    }

    @Get(':id')
    getUserById(
        @Param('id', new ParseUUIDPipe({version: '4'})) id : String
    ){
        return this.getUserById(id);
    }


    @Post()
    postUser(@Body() body : PostUserDto){
        return this.userService.createUser(body);
    }

    @Patch(':id')
    patchUser(
        @Param('id', new ParseUUIDPipe()) id : String, 
        @Body() body : PatchUserDto
    ){
        return this.userService.patchUser(id, body);
    }

    @Delete(':id')
    deleteById(
        @Param('id', new ParseUUIDPipe()) id : String
    ){
        return this.userService.deleteUserById(id);
    }
}