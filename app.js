const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');



const app= express();

//CONEXION DE BASE DE DATOS

const mongoose = require('mongoose');
const url = 'mongodb+srv://juangahona:3206446498gago@cluster0.xx6ms.mongodb.net/PedidosPizza?retryWrites=true&w=majority'
const options = {useNewUrlParser: true, useUnifiedTopology: true};
mongoose.connect(url, options).then(
    () => {console.log('Conectado a mongo')},
    err =>{err}
);

//MIDDLEWARE
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));



//*RUTAS
//app.get("/" , function(req, res){
   //res.send('Hola mundo')
//});


//MIDDLEWARE PARA VUE.JS
app.use('/api', require('./routes/primerBd'))
app.use(express.static(path.join(__dirname, 'public')));
app.set('puerto', process.env.PORT || 3000);
app.listen(app.get('puerto'), function(){
    console.log('Escuchando el puerto' + app.get('puerto'));
});