import { Injectable } from "@nestjs/common";
import { PatchUserDto, PostUserDto } from "./dto";
import { User } from "./interfaces/user.interface";

@Injectable()
export class UserService{

    private users : User[] = [];

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

    fillUsersWithSeedData(users : User[]){
        this.users = users;
    }
}