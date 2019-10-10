const express = require('express');
const postagemRoutes = require('./postagem-routes');
const router = express.Router();

router.get('/', (req, res) =>
    res.send('App está online!')
);

router.use('/postagens', postagemRoutes);

module.exports = router;
