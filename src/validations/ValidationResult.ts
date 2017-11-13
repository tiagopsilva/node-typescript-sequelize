import * as HttpStatus from 'http-status';

import ValidationError from './ValidationError';

class ValidationResult {

    public success = this.isValid;
    public statusCode: number;
    public data: any;
    public errors: ValidationError[];

    constructor() {
        this.errors = [];
        this.statusCode = httpStatus.OK;
    }

    isValid(): boolean {
        return this.errors.length == 0;
    }

    Invalid(): boolean {
        return this.errors.length > 0;
    }

    addError(property: string, message: string): void {
        if (property)
            property = property.trim();
        else
            property = "";

        if (message)
            message = message.trim();
        else
            return;

        this.errors.push(new ValidationError(property, message));
    }
}

export default ValidationResult;