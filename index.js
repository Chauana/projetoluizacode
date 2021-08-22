const options = require('./data');
const User = require('./controller/user');

let jogar = new User({ opt: options }).game();
jogar;

const options = [
    { id: 0, name: 'Pedra' },
    { id: 1, name: 'Papel' },
    { id: 2, name: 'Tesoura' },
  ];
  
  module.exports = options;