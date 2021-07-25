const cors = require('cors')
const express = require('express');
const config = require('./config/config')
const app = express();
const httpServer = require('./service/websocket')(app)


app.set('view engine', 'ejs')
app.engine('html', require('ejs').renderFile)
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors())


app.get('/', (req,res)=>{
    res.render('view.html')
})


httpServer.listen(config.PORT)