const { Sequelize } = require("sequelize");
const db = require("../../../postgres/postgres");

const UserSchema = db.sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name: Sequelize.STRING,
    email: Sequelize.STRING,
})

module.exports = UserSchema;