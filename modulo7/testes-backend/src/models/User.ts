import { IUser } from "./Types";

export class User implements IUser {
    id: string
    name: string
    email: string
    role: string

    constructor(
        id: string,
        name: string,
        email: string,
        role: string
    ){}    

    getId(){
        return this.id
    }
    getName(){
        return this.name
    }
    getEmail(){
        return this.email
    }
    getRole(){
        return this.role
    }

    getUser(){
        return {
            id: this.id, 
            name: this.name,
            email: this.email,
            role: this.role
        }
    }
}