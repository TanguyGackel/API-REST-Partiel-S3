const app = require('express')();
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

dotenv.config();

const swaggerOption = {
    swaggerDefinition : (swaggerJsdoc.Options = {
        info : {
            title : "API REST PARTIEL",
            description : "API documentation",
            contact : {
                name : "GACKEL",
                surname : "Tanguy"
            },
            servers : ['http://localhost:${process.env.PORT}/'],
        },
    }),
    apis: ["app", "./routes/*"],
}

const customersRoutes = require('./routes/customers');
const employeesRoutes = require('./routes/employees');
const officeRoutes = require('./routes/offices');
const ordersRoutes = require('./routes/orders');
const productsRoutes = require('./routes/products');
const orderDetailsRoutes = require('./routes/orderdetails');
const productLinesRoutes = require('./routes/productlines');
const paymentsRoutes = require('./routes/payments');

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(bodyParser.json());

const swaggerDocs = swaggerJsdoc(swaggerOption);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use('/api/customers', customersRoutes);
app.use('/api/employees', employeesRoutes);
app.use('/api/offices', officeRoutes);
app.use('/api/orders', ordersRoutes);
app.use('/api/products', productsRoutes);
app.use('/api/orderDetails', orderDetailsRoutes);
app.use('/api/productLines', productLinesRoutes);
app.use('/api/payments', paymentsRoutes);

module.exports = app;