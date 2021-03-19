//needed modules
const express = require('express');
const cors = require('cors')
const app = express();


app.get("/", (req,res) =>{
    res.send("Cajú api 1.0")
})

//settings
app.set('port',process.env.PORT || 4000);

//middlewares
app.use(cors());
app.use(express.json());

//routes
app.use('/api/inventario/',require('./routes/inventario'));
app.use('/api/ventas/', require('./routes/ventas'));
app.use('/api/clientes/',require('./routes/clientes'));

module.exports = app;