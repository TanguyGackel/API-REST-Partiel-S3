const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE, process.env.USER, process.env.PASSWORD, {
    dialect: 'mysql',
    host: process.env.HOST,
    define: {
        timestamps: false
    },
    logging: false
});

sequelize.authenticate()
    .then(() => console.log('Connection sequalize effectué'))
    .catch((error) => console.error('Connection sequalize échoué :', error));

module.exports = sequelize;