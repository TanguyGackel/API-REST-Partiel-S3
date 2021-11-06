const app = require('express')();
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

dotenv.config();

const customersRoutes = require('./routes/customers');

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(bodyParser.json());


app.use('/api/customers', customersRoutes);

module.exports = app;