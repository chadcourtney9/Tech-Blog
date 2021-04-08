
const { User } = require('../models');

const userData = [{
    username: 'Charmander',
    password: 'Charizard'

},
{
    username: 'Tea',
    password: 'Mug'
},
{
    username: 'Logitech',
    password: 'MxMaster3'
}
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;