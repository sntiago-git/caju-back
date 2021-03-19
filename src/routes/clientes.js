const { Router } = require('express');
const router = Router();

const { getClientes, setCliente, deleteClientes } = require('../controllers/ctrl.clientes');

router.route('/')
    .get(getClientes)
    .post(setCliente)
    .delete(deleteClientes)


module.exports = router;