const express = require('express')
const router = express.Router()
//IMPORTAR EL MODELO 
const PedidoDB = require('../model/registro')
//AGREGAR REGISTRO

router.post('/pedido', async(req,res)=>{
    const body = req.body
    try {
        const pedido = await PedidoDB.create(body);
        res.status(200).json(pedido);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'ocurrio algo inesperado',
            error
        })
        
    }
});

//GET BUSCA TODOS LOS REGISTROS
router.get('/buscarTodo', async(req, res)=>{
    try {
        const pedido = await PedidoDB.find();
    res.json(pedido);
        
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Error en la busqueda',
            error
        })       
        
    }   

});

//GET CON PARAMETROS
router.get('/pedido/:email', async(req, res)=>{
    const correo = req.params.email;
    try {
        const pedido = await PedidoDB.findOne({correo: correo});
        res.json(pedido);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Error en la busqueda de parametro',
            error
        })
        
    }
})

//Delete registro
router.delete('/pedido/:id', async(req, res)=>{
    const _id = req.params.id;
    try {
        const pedido = await PedidoDB.findByIdAndDelete({_id});
        if(!PedidoDB){
            return res.status(400).json({
                mensaje: 'No se encontro el registro',
                error
            })
        }
        res.json(pedido);
        
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error en el delete'
        })        
    }
});

//PUT ACTUALIZAR REGISTRO
// router.put('/actualizar/:id', async(req, res)=>{
//     const _id = req.params.id;
//     const body = req.body;
//     try {
//         const PrimerDB = await PrimerBd.findByIdAndUpdate(
//             _id,
//             body,{new: true});
//             res.json(PrimerDB);
        
//     } catch (error) {
        
//         return res.status(400).json({
//             mensaje: 'No se logro actualizar',
//             error
//         })
//     }
// });




//EXPORTAR LA CONFIGURACION DE EXPRESS
module.exports = router;