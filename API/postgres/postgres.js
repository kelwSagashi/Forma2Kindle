const { Pool } = require("pg");
const { Sequelize } = require("sequelize");

class PostgresConnection {
    constructor(){
        this.sequelize = new Sequelize('forma2', 'docker', 'docker', {
            host: process.env.DB_HOST,
            dialect: 'postgres'
        });

        // this.pool = new Pool({
        //     host: 'postgres',
        //     port: 4444,
        //     user: 'docker',
        //     password: '1234',
        //     database: 'forma2',
        // })
    }

    async connection() {
        try {
            await this.sequelize.authenticate();
            console.log('connection has been established');
        } catch (error) {
            console.log('connection error: ' + error);
        }
    }
}

module.exports = PostgresConnection;