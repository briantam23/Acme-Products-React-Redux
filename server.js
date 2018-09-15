const db = require('./db');
const { Product } = db.models;
const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));

app.use('/public', express.static(path.join(__dirname, 'dist')));

app.use(require('body-parser').json());

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

app.get('/api/products', (req, res, next) => {
    Product.findAll()
        .then(products => res.send(products))
        .catch(next)
})

app.get('/api/products/:id', (req, res, next) => {
    Product.findById(req.params.id)
        .then(product => res.send(product))
        .catch(next)
})

app.post('/api/products', (req, res, next) => {
    Product.create(req.body)
        .then(product => res.send(product))
        .catch(next)
})


db.syncAndSeed();