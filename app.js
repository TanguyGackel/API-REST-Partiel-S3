const app = require('express')();
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

dotenv.config();

const customersRoutes = require('./routes/customers');
const employeesRoutes = require('./routes/employees');
const officeRoutes = require('./routes/offices');
const ordersRoutes = require('./routes/orders');
const productsRoutes = require('./routes/products');
const orderDetailsRoutes = require('./routes/orderdetails');

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(bodyParser.json());

app.use('/api/customers', customersRoutes);
app.use('/api/employees', employeesRoutes);
app.use('/api/offices', officeRoutes);
app.use('/api/orders', ordersRoutes);
app.use('/api/products', productsRoutes);
app.use('/api/orderDetails', orderDetailsRoutes);

module.exports = app;