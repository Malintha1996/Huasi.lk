const express = require('express')
const path = require('path')
const mongoose=require('mongoose')
const config=require('./config/database.js')
const controller=require('./controller.js')
const bodyParser=require('body-parser')
const PORT = process.env.PORT || 5000

mongoose.connect(config.database);
mongoose.connection.on('connected',()=>{
    console.log("connected to database"+config.database);
});
const app=express()

app.use(bodyParser.json());      
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.get('/', (req, res) => res.render('home'))
controller(app)

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
