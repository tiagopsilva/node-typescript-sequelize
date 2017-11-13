const configurations = require(`./config.${process.env.NODE_ENV}.js`);

module.exports = {
    environment: configurations.environment,
    port: configurations.port,
    database: configurations.database,
    secret: configurations.secret
};