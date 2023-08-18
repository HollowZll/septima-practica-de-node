const express = require('express');
const router = express.Router();
const generationUse = require('../usecases/generations.usecase');



router.get('/', (request, response) => {
    const allGenerations = generationUse.listGenerations();

    response.json({
        message: allGenerations
    })

})

router.post('/', (request, response) => {
    const {programa, numero} = request.body;
    generationUse.createGeneration(programa, numero);
    response.json ({
       message: "Generation has been addded sucsesfully"
    })

})

router.delete('/', (request, response) => {
    const {numero} = request.params;
    generationUse.deleteGeneration(numero);
    response.json ({
        message: "generacion abortada"
    })
})






// router.use((request, response, next)=> {
//     console.log("Middleware de Generaciones");
//     next()
// });

// router.get('/', (request, response) => {
//     response.json({
//         message: "GET Generaciones",
//     });
// });

module.exports = router;