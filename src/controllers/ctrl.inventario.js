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

    const codigoProducto = req.body.codigoProducto.trim().toUpperCase();

    const productExists = await modelInventario.findOne({"codigoProducto": codigoProducto});
    if(productExists) return res.status(400).json({error: "Ya existe un producto registrado con ese codigo"});

    const { nombreProducto, cantidadLibrasStock, precioCompra, precioVenta } = req.body;
    const nuevoInventario = new modelInventario({

        nombreProducto: nombreProducto,
        codigoProducto: codigoProducto,
        cantidadLibrasStock: cantidadLibrasStock,
        precioCompra: precioCompra,
        precioVenta: precioVenta
    })

    await nuevoInventario.save();
    res.json(nuevoInventario);
    console.log("Producto creado: ", nuevoInventario);
};

module.exports = CtrlInventario;    