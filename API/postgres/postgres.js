const { Sequelize } = require("sequelize");

class PostgresConnection {
    constructor(){
        this.sequelize = new Sequelize('postgres', 'root', 'root', {
            host: 'localhost',
            dialect: 'postgres'
        });
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