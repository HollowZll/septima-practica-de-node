const fs = require('node:fs');
const filePath = 'db.json';

const defaultDb = {
    koders: [],
    mentors: [],
    generations: [],
}

function createIfNotExists () {
   if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify(defaultDb), "utf-8");
   }
};

function getData () {
   return JSON.parse(fs.readFileSync(filePath, "utf-8"))
};

function updateData (newData) {
    fs.writeFileSync(filePath, JSON.stringify(newData), "utf-8");
}

module.exports = {
    createIfNotExists,
    getData,
    updateData
}