const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
    res.send('lista de postagem');
})

router.post('/', function(req, res){
    res.send('postagem salva')
})

module.exports = router;

