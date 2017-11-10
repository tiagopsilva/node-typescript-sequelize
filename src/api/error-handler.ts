import { Request, Response, ErrorRequestHandler, NextFunction } from 'express';

export function errorHandler(error: ErrorRequestHandler, request: Request, response: Response, next: Function) {
    console.error(`API error handler executed: ${error}`);
    response.status(500).json({
        statusCode: 500,
        message: 'Não foi possível processar sua requisição'
    });
}