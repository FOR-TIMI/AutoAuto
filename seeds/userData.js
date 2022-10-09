const { User } = require('../models');

const userData = [
  {
    username: 'CarGuy',
    email: 'carguy@mail.com',
    password: 'password',
  },
  {
    username: 'CarGirl',
    email: 'CarGirl@mail.com',
    password: 'password',
  },  
  {
    username: 'CarCrazy',
    email: 'CarCrazy@mail.com',
    password: 'password',
  },  
  {
    username: 'ILikeCars',
    email: 'ILikeCars@mail.com',
    password: 'password',
  },  
  {
    username: 'WhatInCarnation',
    email: 'WhatInCarnation@mail.com',
    password: 'password',
  },  
  {
    username: 'MagiCARp',
    email: 'MagiCARp@mail.com',
    password: 'password',
  },  
  {
    username: 'FastCarDriver',
    email: 'FastCarDriver@mail.com',
    password: 'password',
  },  
  {
    username: 'TheStig',
    email: 'TheStig@mail.com',
    password: 'password',
  },  
  {
    username: 'NewCarOwner',
    email: 'NewCarOwner@mail.com',
    password: 'password',
  },  
  {
    username: 'CARpleTunnel',
    email: 'CARpleTunnel@mail.com',
    password: 'password',
  },
];

const seedUser = () => User.bulkCreate(userData,{individualHooks : true });

module.exports = seedUser;
