"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const api_1 = require("./api/api");
const config = require('./config/env/config')();
const server = http.createServer(api_1.default);
server.listen(config.serverPort);
server.on('listening', () => console.log('The server is running on port: ' + config.serverPort));
server.on('error', (error) => console.log(`Ocorreu um erro: ${error}`));
