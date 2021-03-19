const CtrlVentas = {};

const modelVentas = require('../models/Ventas');

CtrlVentas.getVentas = async (req, res) => {

    const listadoVentas = await modelVentas.find();
    res.json(listadoVentas);
};

CtrlVentas.deleteVentas = async (req, res) => {

    await modelVentas.deleteMany({});
};

CtrlVentas.setVenta = async (req, res) => {

    const {cliente, producto, cantidad, medioPago, fechaCompra} = req.body;
    const nuevaVenta = new modelVentas({
        cliente: cliente,
        producto: producto,
        cantidad: cantidad,
        medioPago: medioPago,
        fechaCompra: fechaCompra
    })
    await nuevaVenta.save();
};

module.exports = CtrlVentas;