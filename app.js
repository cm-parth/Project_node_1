const path = require('path')
const express = require('express')
// dotenv will have the config
const dotenv = require('dotenv')
// when there is the request to page and any kind of request it shows down in the console
const morgan = require('morgan')
const exphbs = require('express-handlebars')
const connectDB = require('./Config/db')

// Load config 
dotenv.config({path: './Config/config.env'})

// connect to database
connectDB()

const app = express()

// LOGGING: this shows the https method to the console
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}

// Handlebars
// --so that we can save the file with the extention -> .hbs
app.engine('.hbs',exphbs.engine({defaultLayout:'main',extname:'.hbs'}));
app.set('view engine', '.hbs')

// Static folder
app.use(express.static(path.join(__dirname, 'public')))


// Routes
app.use('/dashboard', require('./routes/index'))
app.use('/',require('./routes/index'))



const PORT = process.env.PORT || 5000
// port is in config 
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))