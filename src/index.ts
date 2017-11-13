import * as http from 'http';

const app = require('./app');

const config = require('./config/config');

const models = require('./models/index');

/**
 * create the server instance
 */
const server = http.createServer(app);

/**
 * configure server with sequelize
 */
models.sequelize.sync().then(() => {
    
    /**
     * start the server
     */
    server.listen(config.port);

    /**
     * listening events
     */
    server.on('listening', () => console.log('The server is running on port: ' + config.port));
    server.on('error', (error: NodeJS.ErrnoException) => console.log(`Ocorreu um erro: ${error}`));
});