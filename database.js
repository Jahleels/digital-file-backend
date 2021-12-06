const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://juangahona:3206446498gago@cluster0.xx6ms.mongodb.net/books?retryWrites=true&w=majority', {
    useNewUrlParser : true,
    useUnifiedTopology: true
}).then(db => console.log('conectado a la db'))