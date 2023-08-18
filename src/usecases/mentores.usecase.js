const db = require('../lib/db');

function createMentor (name, age) {
    const newMentor = {
        name,
        age,
       };
       const data = db.getData();
       data.mentors.push(newMentor);
       db.updateData(data);
};

function listMentor () {
    const data = db.getData();
    return data.mentors;
};

function deleteMentor (name) {
    const data = db.getData();
    const newMentorList = data.mentors.filter(mentor => mentor.name !== name);
    data.mentors = newMentorList;
    db.updateData(data);
};

module.exports = {
    createMentor,
    listMentor,
    deleteMentor,
}