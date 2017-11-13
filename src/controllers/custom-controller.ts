import * as HttpStatus from 'http-status';
import { Response } from 'express';

import ValidationResult from '../validations/ValidationResult';

class CustomController {

    constructor() {

    }

    processPromisseResult(promise: any, response: Response, statusCode: number = HttpStatus.OK) {
        let validation = new ValidationResult();
        promise.then(data => {
            validation.data = data;
            response.status(statusCode).json(validation);
        }).catch(e => {
            console.error(e);
            if (typeof e == Sequelize.ValidationError) {
                e.errors.forEach(item => validation.addError(item.path, item.message));
                response.status(statusCode).json(validation);
            } else {
                validation.addError('', 'Não foi possível processar sua requisição');
                validation.statusCode = HttpStatus.INTERNAL_SERVER_ERROR;
                response.status(statusCode).json(validation);
            }
        });
    }
}

export default CustomController;