const db = require('../lib/db')

function createKoder (name, email, program, generation) {
   const newKoder = {
    name,
    email,
    program,
    generation
   };
   const data = db.getData();
   data.koders.push(newKoder);
   db.updateData(data);
};

function deleteKoder (name) {
  const data = db.getData();
  const newKodersList = data.koders.filter(koder => koder.name !== name);
  data.koders = newKodersList;
  db.updateData(data);
}

function listKoder(){
    const data = db.getData();
    return data.koders;
}

module.exports = {
    createKoder,
    deleteKoder,
    listKoder,
}