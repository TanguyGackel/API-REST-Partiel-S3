const Sequelize = require('sequelize');
const sequelize = require('../config/sequelize.config');

const User = sequelize.define('comment', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    firstName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    emailID: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {isEmail: true},
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    }}
    ,
    {
        tableName: 'users'
});

module.exports = User;