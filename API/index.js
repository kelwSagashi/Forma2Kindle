const express = require("express");
const cors = require('cors');
const morgan = require('morgan');
const PostgresConnection = require("./postgres/postgres");
const { Pool } = require("pg");

const app = express(cors());

// comunicação de dados com json
app.use(express.json());    
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use(morgan('dev'));

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.json({
        Message: "Bem Vindo!",
        Name: "Forma2Kindle",
        Discription: "Transforme Imagens ou PDF's em arquivos que você possa ler no seu Kindle.",
    })
});

const PORT = 8080;

const db_connect = new PostgresConnection();
db_connect.connection();

app.listen(PORT, function(){
    console.lof(process.env.SERVER_PORT);
    console.log(`Servidor rodando em: http://localhost:${PORT}`);
    console.log("Servidor Online!")
})
