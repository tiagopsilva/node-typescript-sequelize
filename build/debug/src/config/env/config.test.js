module.exports = {
    env: 'test',
    db: 'ts-api',
    dialect: 'mssql',
    host: 'localhost',
    port: process.env.PORT || 3000,
    connectionString: 'Data Source=(local); Initial Catalog=ts-api-tests; Integrated Security=True',
    secret: 'S3cr3t'
};
