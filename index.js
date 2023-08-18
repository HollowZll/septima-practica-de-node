// Levantar el servidor
// Iniciar la applicacion

const server = require('./src/server');

const db = require('./src/lib/db')

db.createIfNotExists();
server.listen(8080, () => {
    console.log('listening 8080')
});