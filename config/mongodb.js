const mongoose = require('mongoose');

function conectaMongoDB() {
    mongoose.connect(
        'mongodb://webuser:web12345@ds135128.mlab.com:35128/aulaweb',
        {useUnifiedTopology: true, useNewUrlParser: true}
    );

    const db = mongoose.connect;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', ()=> console.info('MongoDB conectao com sucesso!'));
}

module.exports = conectaMongoDB;
