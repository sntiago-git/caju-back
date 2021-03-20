const CtrlClientes = {};
const modelClientes = require('../models/Clientes')

CtrlClientes.getClientes = async (req, res) => {

    const listaClientes = await modelClientes.find();
    res.json(listaClientes);
};

CtrlClientes.deleteClientes = async (req, res) => {

    await modelClientes.deleteMany({});
};

CtrlClientes.setCliente = async (req, res) => {

    const { nombre, cedula, telefono, direccion } = req.body;
    const nuevoCliente = new modelClientes({
        nombre: nombre,
        cedula: cedula,
        telefono: telefono,
        direccion: direccion
    });

    const userExist = await modelClientes.findOne({"cedula": cedula});
    if(userExist) return res.status(400).json({error: "Ya existe un usuario registrado con esa cedula"});
    
    await nuevoCliente.save();
    res.json(nuevoCliente);
    console.log("Cliente creado: ", nuevoCliente);
};

module.exports = CtrlClientes;