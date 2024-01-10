import { Injectable } from "@nestjs/common";
import { PatchUserDto, PostUserDto } from "./dto";

@Injectable()
export class UserService{
    findAll(){
        
    }

    findUserById(id : String){

    }

    createUser(body : PostUserDto){

    }

    patchUser(id : String, body : PatchUserDto){

    }

    deleteUserById(id : String){

    }
}