const express = require("express");
const cors = require('cors');
const morgan = require('morgan');
const PostgresConnection = require("./postgres/postgres");

const app = express(cors());

// comunicação de dados com json
app.use(express.json());    

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

app.listen(3030, function(){
    console.log(`Servidor rodando em: http://localhost:3030`);
    console.log("Servidor Online!")
})

const db_connect = new PostgresConnection();
db_connect.connection();