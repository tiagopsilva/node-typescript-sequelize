module.exports = {
    environment: 'test',
    port: process.env.PORT || 3000,
    database: {
        name: 'NodeAPI-Tests',
        username: 'tsapi',
        password: 'tsapi',
        options: {
            logging: false,
            dialect: 'mssql',
            host: 'localhost',
            port: 1433,
        }
    },
    secret: 'S3cr3t'
}