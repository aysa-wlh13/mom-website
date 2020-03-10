require('dotenv').config();

const express = require('express')

const massive = require('massive')

const session = require('express-session')

const authCtrl = require('./controllers/authController')

const infoCtrl = require('./controllers/infoController');

const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET}=process.env

const app = express();
 
app.use(express.json())
 
const port = SERVER_PORT;

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('db connected')

        app.listen(port, () => console.log(`${port} is Haunted!`))
})

app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {
        maxAge: 1000 * 60 * 60
    }
}))

//Endpoints
//////////////////////////////////////////////////////
//authController endpoints
app.post('/auth/therapistRegister', authCtrl.therapistRegister);

app.post('/auth/clientRegister', authCtrl.clientRegister);

app.post('/auth/login', authCtrl.login);

app.post('/auth/logout', authCtrl.logout);

app.post('/auth/user', authCtrl.getUser);


//////////////////////////////////////////////////////
//info
    //get
    app.get('/api/getInfo', infoCtrl.getInfo);

    //post
    app.post('/api/addInfo', infoCtrl.addInfo);

    //put
    app.put('/api/editInfo/:text_id', infoCtrl.editInfo);

    //delete
    app.delete('/api/deleteInfo/:users1_id', infoCtrl.deleteInfo);


//////////////////////////////////////////////////////
//Stripe