const express = require('express');
const morgan = require('morgan');
const multer = require("multer");
const cors = require('cors');
const path = require('path');

const fileUpload = require('express-fileupload')


var corsOptions = {
    origin: "http://localhost:8080",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    credentials: true,
  };

const app= express();

//CONEXION DE BASE DE DATOS

// const mongoose = require('mongoose');
// const url = 'mongodb+srv://juangahona:3206446498gago@cluster0.xx6ms.mongodb.net/PedidosPizza?retryWrites=true&w=majority'
// const options = {useNewUrlParser: true, useUnifiedTopology: true};
// mongoose.connect(url, options).then(
//     () => {console.log('Conectado a mongo')},
//     err =>{err}
// );

const upload = multer({
    dest: "./uploads/",
  });

//##########333333
require('./database')
const Book = require('./model/Book')

//MIDDLEWARE
app.use(morgan('tiny'));
app.use(cors());
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(fileUpload())



//*RUTAS
//app.get("/" , function(req, res){
   //res.send('Hola mundo')
//});


//MIDDLEWARE PARA VUE.JS
app.use('/api', require('./routes/primerBd'))
app.use(express.static(path.join(__dirname, 'public')));
// app.set('puerto', process.env.PORT || 3000);
// app.listen(app.get('puerto'), function(){
//     console.log('Escuchando el puerto' + app.get('puerto'));
// });
app.listen(5000, () => console.log("Running on port 5000"));


// app.post("/upload", upload.single("file"), (req, res) => {
//     console.log("POST1");
//     console.log(req.file);
//     res.json({ file: req.file });
//   });


  app.get("/test", (req, res) => {
    console.log("POST");
    res.json({ bien: "Todo OK" });
  });


  //###################
//   app.get("/book", async(req, res) => {
//     let books = await Book.find()
//     console.log("POST");
//     res.json({ bien: "Todo OK", books });
//   });

  app.post("/book", async (req, res) => {
    let archivo = req.files;
    console.log(archivo);
    
    let file = archivo.archivo.data
    const book = new Book({ archivo:file })
    await book.save();
    res.json({ msg: "archivo agregado" });
  });



