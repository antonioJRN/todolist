const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require("cors");

app.use(
    express.urlencoded({
        extended: true,
    }),
)
app.use(cors())
app.use(express.json());

const taskRoutes = require('./routes/taskRoutes')

app.use('/task', taskRoutes)

mongoose.connect(
    // Abaixo o servidor conectado no banco 
    'mongodb+srv://neto:TMp3cMGeRS0yD6Av@apicluster.dhpa3.mongodb.net/bancotodolist?retryWrites=true&w=majority' //Servidor rodando na nuvem
)
.then(() => {
    console.log('Connect mongodb')
    app.listen(3333)
})
.catch((err) => console.log(err))


