import { User } from "src/user/interfaces/user.interface";
import { v4 as uuidv4 } from 'uuid';

export const USERS_SEED : User[] = [
    {
        id: uuidv4(), 
        name: 'Lola', 
        first_last_name: 'Montoya', 
        second_last_name: 'Pérez', 
        email:'lola@gmail.com', 
        password:'Abcd123$'
    },

    {
        id: uuidv4(), 
        name: 'Juan José', 
        first_last_name: 'Zamarripa', 
        second_last_name: 'Hurtado', 
        email:'juanjo@gmail.com', 
        password:'Abcd123$'
    },
];
