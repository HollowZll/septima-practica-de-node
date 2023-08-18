
const express = require('express');

//importar
const kodersUse = require('../usecases/koders.usecase')
const router = express.Router();


router.get('/', (request, response) => {
    //invocamos function para listar koders de .db
    const allKoders = kodersUse.listKoder();
    response.json({
        message: "get koders",
        // listamos en el json todos los koders que obtuvimos de AllKoders
        koders: allKoders,
    })
})

router.post('/', (request, response) => {
    const {name, email, program, generation} = request.body   ///all the information of the koder, deconstruction of the imported object
    //that we took from request.body
    kodersUse.createKoder(name, email, program, generation); // we created the koder
    response.json({
        message: "koder created",
    })
})


// '/:name'
router.delete('/:name', (request, response) => {
    // deconsturct from url using request.params
    const {name} = request.params;
    // we use the deconstructed name from the url as the paramets in the function delete koders
    kodersUse.deleteKoder(name);
    response.json({
        message: "koder fatalitiado",
    })
})

module.exports = router;