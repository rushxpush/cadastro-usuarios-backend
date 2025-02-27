db = db.getSiblingDB('cadastro-usuarios');

db.createCollection('users');

db.users.insertMany([
  {
    name: 'admin',
    email: 'admin@spsgroup.com.br',
    password: '1234',
    type: 'admin',
  },
  {
    name: 'Superman',
    email: 'superman@justiceleague.com',
    password: '1234',
    type: 'user',
  },
  {
    name: 'Batman',
    email: 'batman@justiceleague.com',
    password: '1234',
    type: 'user',
  },
  {
    name: 'Wonder Woman',
    email: 'batman@justiceleague.com',
    password: '1234',
    type: 'user',
  },
  {
    name: 'Green Lantern',
    email: 'greenlantern@justiceleague.com',
    password: '1234',
    type: 'user',
  },
  {
    name: 'Aragorn',
    email: '@middleearth.com',
    password: '1234',
    type: 'user',
  },
  {
    name: 'Sauron',
    email: 'sauron@middleearth.com',
    password: '1234',
    type: 'user',
  },
  {
    name: 'Gandalf',
    email: 'gandalf@middleearth.com',
    password: '1234',
    type: 'user',
  },
]);
