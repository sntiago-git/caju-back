const mongoose = require('mongoose');

const URI = process.env.MONGODB_URI;

mongoose.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}, (err, db) => {

    console.log('Connected to the Mongo Database, chief');
    console.log(URI)
});

