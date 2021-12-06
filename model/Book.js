const { Schema, model} = require("mongoose")


const BookSchema = Schema ({
    archivo: Buffer,
})

module.exports = model('Book', BookSchema)