const app = require('express')();
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const passport = require('passport');
const session = require('express-session');
const {engine} = require('express-handlebars');

dotenv.config();

//Configuration de swagger
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

//Configuration d'handlebars
app.set('views', './views');
app.set('view engine', '.hbs');
app.engine(
    'hbs',
    engine ({
        extname: '.hbs',
        defaultLayout: '',
        layoutsDir: '',
    })
)

//Import des différentes routes pour les requêtes
const customersRoutes = require('./routes/customers');
const employeesRoutes = require('./routes/employees');
const officeRoutes = require('./routes/offices');
const ordersRoutes = require('./routes/orders');
const productsRoutes = require('./routes/products');
const orderDetailsRoutes = require('./routes/orderdetails');
const productLinesRoutes = require('./routes/productlines');
const paymentsRoutes = require('./routes/payments');

const User = require('./models/users');
const sequelize = require('./config/sequelize.config');

const authRoute = require('./routes/auth.js')(app,passport);

require('./config/passport.config')(passport, User);

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

//Configuration BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Configuration Passport
app.use(session({ secret: process.env.SECRET,resave: true, saveUninitialized:true}));
app.use(passport.initialize());
app.use(passport.session());

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

//Synchronisation sequelize
sequelize.sync()
    .then(console.log("Sequelize est synchronisé"))
    .catch((error) => {console.log("Sequelize n'est pas synchronisé", error)});

module.exports = app;