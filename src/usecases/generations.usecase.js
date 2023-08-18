const db = require('../lib/db');

function createGeneration (programa, numero) {
    const newGeneration = {
        programa,
        numero,
    };
    const data = db.getData();
    data.generations.push(newGeneration);
    db.updateData(data);
}

function deleteGeneration (numero) {
    const data = db.getData();
    const newGenerationList = data.numero.filter(numeros =>  numeros.numero !== numero);
    data.generations = newGenerationList;
    db.updateData(data);
};

function  listGenerations() {
    const data = db.getData;
    return data.generations;
};


module.exports = {
    createGeneration,
    deleteGeneration,
    listGenerations,
};
