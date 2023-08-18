// Describir y montar el servidor :

const express = require('express');

const app = express();

app.use(express.json());

const koders = require("./routes/koders");
const generacionesRouter = require("./routes/generacionesRouter") ;
const mentoresRouter = require("./routes/mentores");

app.use(express.json());
app.use("/koders", koders);
app.use('/mentores', mentoresRouter);
app.use('/generaciones', generacionesRouter);

app.get('/', (request, response) => {
   response.json({
    message: "Api de Daniel v1"
   });
});

module.exports = app;