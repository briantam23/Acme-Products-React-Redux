const db = require('../db');
const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`

        Listening on PORT ${PORT}!
        http://localhost:${PORT}
        
    `)
);

app.use('/public', express.static(path.join(__dirname, '../dist')));

app.use(require('body-parser').json());

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')));

app.use('/api/products', require('./products'));



db.syncAndSeed();