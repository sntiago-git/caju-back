const CtrlInventario = {};
const modelInventario = require('../models/Inventario');

CtrlInventario.getInventario = async(req, res) => {

    const listadoInventario = await modelInventario.find();
    res.json(listadoInventario);
};

CtrlInventario.deleteInventario = async (req, res) => {

    await modelInventario.deleteMany({});
};

CtrlInventario.addInventario = async (req, res) => {

    const { nombreProducto, codigoProducto, cantidadLibrasStock, precioCompra, precioVenta } = req.body;
    const nuevoInventario = new modelInventario({

        nombreProducto: nombreProducto,
        codigoProducto: codigoProducto,
        cantidadLibrasStock: cantidadLibrasStock,
        precioCompra: precioCompra,
        precioVenta: precioVenta
    })
    await nuevoInventario.save();
    
};

module.exports = CtrlInventario;    