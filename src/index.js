const express = require('express')
const router = require('./router')
const cors = require('cors')
const session = require('express-session')
const MongoStore = require('connect-mongo')
const handlebars = require('express-handlebars')
const passport = require('passport')
const initializePassport = require('./config/passport.config')
const mongoConnect = require('../db')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(__dirname +'/public'))
app.use(cookieParser)
app.use(morgan('dev'))
app.use(session({
    store: MongoStore.create({
        mongoUrl:'mongodb+srv://RodrigoTrillo:Rolly1560@clustercoder.gkuf5cv.mongodb.net/?retryWrites=true&w=majority',
        mongoOptions:{useNewUrlParser: true,useUnifiedTopology:true}
    }) ,
    secret:'asdasdasd12312',
    resave:false,
    saveUninitialized:false,
}))
initializePassport()
app.use(passport.initialize())
app.use(passport.session())
app.use(cors)


app.engine('handlebars', handlebars.engine())
app.set('views',__dirname + '/views')

router(app)
mongoConnect()
app.listen(3000 , ()=>{
    console.log(3000)
})