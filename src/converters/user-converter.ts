import { IUser } from "../models/interfaces/user-interface";

class UserConverter {

    constructor() {

    }

    createUser({ id, name, email, password }: any): IUser {
        return {
            id, name, email, password
        }
    }

    createUsers(data: any[]): IUser[] {
        let users: IUser[] = [];
        for (let item in data)
            users.push(this.createUser(item));
        return users;
    }
}

export default UserConverter;