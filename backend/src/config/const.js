const dbPass = process.env.DB_PASS
const dbUser = process.env.DB_USER
const dbName = process.env.DB_NAME
const dbDialect = process.env.DB_DIALECT
const sslOp = process.env.SSL_OPTION
const dbHost = process.env.DB_HOST
const dbPort = process.env.DB_PORT

module.exports =  {
    dbPass,
    dbUser,
    dbName,
    dbDialect,
    sslOp,
    dbHost,
    dbPort
}