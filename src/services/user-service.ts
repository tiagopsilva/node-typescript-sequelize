import { IUser } from '../models/interfaces/user-interface';
import UserConverter from '../converters/user-converter';

const model = require('../models');

class UserService implements IUser {

    public id: number;
    public name: string;
    public email: string;
    public password: string;

    private _converter: UserConverter;

    constructor() {
        this._converter = new UserConverter();
    }

    getAll(): IUser[] {
        let users = model.User.findAll({
            order: ['name']
        });
        return this._converter.createUsers(users);
    }

    getById(id: number): IUser {
        let user = model.User.findOne({
            where: { id }
        });
        return this._converter.createUser(user);
    }

    getByEmail(email: string): IUser {
        return model.User.findOne({
            where: { email }
        });
    }

    create(user: any) {
        return model.User.create(user).then(data => {
            return data.dataValues;
        });
    }

    update(id: number, user: any) {
        return model.User.update(user, {
            where: { id },
            fields: ['name', 'email', 'password']
        }).then(result => {
            return {
                affected: result[0]
            };
        });
    }

    delete(id: number) {
        return model.User.destroy({
            where: { id }
        }).then(affected => {
            return {
                affected: affected
            };
        });
    }
}

export default UserService;
