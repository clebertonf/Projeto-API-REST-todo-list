const express = require('express');
require('dotenv').config();

const { PORT } = process.env;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(require('./routers/index'));

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
