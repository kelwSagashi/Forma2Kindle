const { Sequelize } = require("sequelize");

class PostgresConnection {
    constructor(){
        try {
            console.log({
                db_name: process.env.PG_DB,
                db_user: process.env.PG_USER,
                db_password: process.env.PG_PASSWORD,
                db_host: process.env.PG_HOST,
            })
            const db_name = process.env.PG_DB;
            const db_user = process.env.PG_USER;
            const password = process.env.PG_PASSWORD;
            const db_host = process.env.PG_HOST;
            this.sequelize = new Sequelize(
                db_name, 
                db_user, 
                password, 
                {
                    host: db_host,
                    dialect: 'postgres'
                }
            );
        } catch (error) {
            console.log('Sequelize instance error: ' + error);
        }
    }

    async connection() {
        try {
            await this.sequelize.authenticate({});
            await this.sequelize.sync({force: false});
            console.log('connection has been established');
        } catch (error) {
            console.log('connection error: ' + error);
        }
    }
}

const db = new PostgresConnection();
db.connection();

module.exports = db;