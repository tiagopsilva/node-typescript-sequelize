module.exports = {
    env: 'development',
    db: 'ts-api',
    dialect: 'mssql',
    host: 'localhost',
    port: process.env.PORT || 3000,    
    connectionString: 'Data Source=(local); Initial Catalog=ts-api; Integrated Security=True',
    secret: 'S3cr3t'
}