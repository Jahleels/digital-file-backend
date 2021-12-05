const mongoose = require('mongoose');
const Schema= mongoose.Schema;


const pedido = new Schema({
    pizza: {type:String, required:[true, 'Nombre y apellido del trabajador obligatorio']},
    precio: {type:Number, required:[true, 'precio del trabajador obligatorio']},    
    direccion: {type:String, required:[true, 'direccion del trabajador obligatorio']},
    correo: {type:String, required:[true, 'correo del trabajador obligatorio']},
    nombreusuario:{type:String, required:[true, 'correo del trabajador obligatorio']}
});

// CONVERTIR MODELO

const PedidoDB = mongoose.model('pedido', pedido);
module.exports = PedidoDB;