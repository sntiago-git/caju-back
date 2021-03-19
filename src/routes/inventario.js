const { Router } = require('express');
const router = Router();

const { getInventario, addInventario, deleteInventario } = require('../controllers/ctrl.inventario');

router.route('/')
    .get(getInventario)
    .post(addInventario)
    .delete(deleteInventario);


module.exports = router;