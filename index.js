const express = require('express');
const cors = require('cors');
require('dotenv').config();
const errorMiddleware = require('./middlewares/errorMiddleware');

const { PORT } = process.env;

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(require('./routers/index'));

app.use(errorMiddleware);

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
