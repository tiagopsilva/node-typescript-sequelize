"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const routes_1 = require("./routes/routes");
const error_handler_1 = require("./error-handler");
class Api {
    constructor() {
        this.express = express();
        this.configure();
    }
    configure() {
        this.express.use(morgan('dev'));
        this.express.use(bodyParser.urlencoded({ extended: true }));
        this.express.use(bodyParser.json());
        this.express.use(error_handler_1.errorHandler);
        this.addRoutes();
    }
    addRoutes() {
        new routes_1.default(this.express);
    }
}
exports.default = new Api().express;
