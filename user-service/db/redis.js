const redis = require('redis');
const client = redis.createClient({
    port: process.env.REDIS_PORT || 'localhost',
    host: process.env.REDIS_HOST || 6379
});
const {promisify} = require('util');

const getAsync = promisify(client.get).bind(client);
const setAsync = promisify(client.set).bind(client);
const expireAsync = promisify(client.expire).bind(client);
const deleteAsync = promisify(client.del).bind(client);
const allKeysAsync = promisify(client.keys).bind(client);

client.on('error', (err) => {
    console.log(err);
})

client.on('connect', () => {
    console.log("Redis Connected");
})

module.exports = {
    getAsync,
    setAsync,
    expireAsync,
    deleteAsync,
    allKeysAsync
}