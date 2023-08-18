const express = require('express')
const router = express.Router();
const mentorUse = require('../usecases/mentores.usecase')

router.get("/", (request, response) => {
    const allMentors = mentorUse.listMentor();
    response.json({
      message: "GET Mentores" , 
      mentors: allMentors,
    });
});


//post

router.post('/', (request, response) => {
   const {name, age} = request.body
   mentorUse.createMentor(name, age);
   response.json({
    message: 'mentor added'
   })
})

router.delete('/:name', (request, response) => {
  const {name} = request.params;
  mentorUse.deleteMentor(name);
  response.json(
    {
      message: "mentor fataliado"
    }
  )
})

module.exports = router;