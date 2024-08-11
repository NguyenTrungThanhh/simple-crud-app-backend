const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');

const productRoutes = require('./routes/product.route');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/products', productRoutes);

app.get('/', (req, res, next) => {
    res.send('Hello World!');
});

app.listen(3000, () => {
    console.log('Server start on port 3000');
});

const mongoURL = 'mongodb://localhost:27017/product';

mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
