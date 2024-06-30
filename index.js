const mongoose = require('mongoose')
const url_BD = ('mongodb://localhost:27017/Abarrotes')

mongoose.connect(url_BD)
.then(() => {
    console.log('Sirve la conexion')
})
.catch ((err)=> {
    console.log('No sirve')
})

const esquema_producto = new mongoose.Schema(
{
    producto: {
        type: String
    },
    marca: {
        type: String
    },
    precio: {
        type: String
    },
    presentacion: {
        type: Number
    },
    cantidad: {
        type: Number
    },
})

const modelo_producto = new mongoose.model(
    "Tabla de productos", esquema_producto)

    modelo_producto.create({
        producto: "Coca cola",
        marca: "Coca cola",
        precio: "15",
        presentacion: "1",
        cantidad: "10",
    });
    modelo_producto.create({
        producto: "Pepsi",
        marca: "Pepsi",
        precio: "12",
        presentacion: "1",
        cantidad: "5",
    });
    modelo_producto.create({
        producto: "Sabritas",
        marca: "Sabritas",
        precio: "10",
        presentacion: "1",
        cantidad: "8",
    });
