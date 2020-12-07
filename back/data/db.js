
const mongoose = require('mongoose');

mongoose.connect(
    'mongodb+srv://dpessoa:rootroot@flash.e0x5i.mongodb.net/flashdb?retryWrites=true&w=majority',
    { useNewUrlParser: true,  useUnifiedTopology: true }, () =>
    console.log('Conectado')
);
