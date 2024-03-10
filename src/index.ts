import express from 'express'; //ESmodules imports and exports
//const express = require('express'); -> commonjs

import diaryRouter from './routes/diaries'

const app = express();

app.use(express.json()); // Middleware que transforma la req.body a un json

const PORT = 3001

app.get('/api', (_, res) => {
    console.log('Funciona JAJAJAJA');
    res.send('Funciona');
})

app.use('/api/diaries', diaryRouter)

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
})
