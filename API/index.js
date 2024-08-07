const express = require("express");
const cors = require('cors');
const morgan = require('morgan');
const { AllRoutes } = require("./src/routes");
const PostgresConnection = require("./postgres/postgres");

const db = new PostgresConnection();
db.connection();

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

app.use('/api', AllRoutes);

const PORT = process.env.SERVER_PORT | 8080;

app.listen(PORT, function(){
    console.log();
    console.log(`Servidor rodando em: http://localhost:${PORT}`);
    console.log("Servidor Online!")
})
