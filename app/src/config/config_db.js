let databaseUser = 'myTester'
let databasePassword = 'xyz123'
let databaseHost = 'localhost'
// let databaseHost = "localhost";
let databasePort = '27017'
let databaseName = 'test'
let databaseConnectionOpts = ''
// let remoteUrl = `mongodb://${databaseUser}:${databasePassword}@${databaseHost}:${databasePort}/${databaseName}?${databaseConnectionOpts}`

module.exports = {
  port: process.env.PORT || 3001,
  db: process.env.MONGODB_URI || `mongodb://${databaseUser}:${databasePassword}@${databaseHost}:${databasePort}/${databaseName}?${databaseConnectionOpts}`,
  SECRET_TOKEN: 'miclavedetokens'
}