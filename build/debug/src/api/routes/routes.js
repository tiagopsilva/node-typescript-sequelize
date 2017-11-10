"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Routes {
    constructor(app) {
        this.getRoutes(app);
    }
    getRoutes(app) {
        app.route('/').get((req, res) => res.send('Hello, world!'));
        app.route('/ola/:nome').get((req, res) => res.send(`Hello, ${req.params.nome}`));
    }
}
exports.default = Routes;
