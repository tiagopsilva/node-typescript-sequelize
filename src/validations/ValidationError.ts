class ValidationError {
    public property: string;
    public message: string;

    constructor(property: string, message: string) {
        this.property = property;
        this.message = message;
    }

    ToString() {
        return `${(this.property.length == 0 ? "" : this.property + ": ")}${this.message}`;
    }
}

export default ValidationError;