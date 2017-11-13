import * as HttpStatus from 'http-status';
import { Request, Response } from 'express';

import UserService from '../services/user-service';
import UserConverter from '../converters/user-converter';
import ValidationResult from '../validations/ValidationResult';
import CustomController from './custom-controller';

class UserController extends CustomController {

    private _service: UserService;
    private _converter: UserConverter;

    constructor() {
        super();
        this._service = new UserService();
        this._converter = new UserConverter();
    }

    getAll(req: Request, res: Response) {
        let users = this._service.getAll();
        res.status(HttpStatus.OK).json({
            success: true,
            data: users
        });
    }

    getById(req: Request, res: Response) {
        var user = this._service.getById(req.params.id);
        res.status(HttpStatus.OK).json({
            success: true,
            data: user
        });
    }

    getByEmail(req: Request, res: Response) {
        var user = this._service.getByEmail(req.params.email);
        res.status(HttpStatus.OK).json({
            success: true,
            data: user
        });
    }

    create(req: Request, res: Response) {
        let createUser = this._converter.createUser(req.body);
        let promise = this._service.create(createUser);
        super.processPromisseResult(promise, res);
    }

    update(req: Request, res: Response) {
        let updateUser = this._converter.createUser(req.body);
        let promise = this._service.update(updateUser.id, updateUser);
        super.processPromisseResult(promise, res);
    }

    delete(req: Request, res: Response) {
        let result = new ValidationResult();
        let promise = this._service.create(req.params.id);
        super.processPromisseResult(promise, res);
    }
}

export default UserController;