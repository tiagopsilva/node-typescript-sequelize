"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function errorHandler(error, request, response, next) {
    console.error(`API error handler executed: ${error}`);
    response.status(500).json({
        statusCode: 500,
        message: 'Não foi possível processar sua requisição'
    });
}
exports.errorHandler = errorHandler;
