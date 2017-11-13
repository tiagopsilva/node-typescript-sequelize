import * as express from 'express';
import * as morgan from 'morgan';
import * as bodyParser from 'body-parser';
import { errorHandler } from './handlers/error-handler';

/**
 * instantiate a express app
 */
const app = express();

/**
 * configure middlewares
 */
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: '5mb' }));
app.use(errorHandler);

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

/**
 * routes
 */
const userRoutes = require('./routes/user-routes');

app.use('/api/users', userRoutes);

module.exports = app;