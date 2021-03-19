const { Router } = require('express');
const router = Router();

const { getVentas, setVenta, deleteVentas } = require('../controllers/ctrl.ventas');

router.route('/')
    .get(getVentas)
    .post(setVenta)
    .delete(deleteVentas)


module.exports = router;