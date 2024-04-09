const db = require('../config/connection');
const Category = require('../models/Category');
const Product = require('../models/Product');
const User = require('../models/User');
const Dog = require('../models/clothing');


db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Gifts' },
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      
    }
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Philip',
    lastName: 'Fry',
    email: 'fry@testmail.com',
    password: 'password12345',
    
  });

  await User.create({
    firstName: 'John',
    lastName: 'Zoidberg',
    email: 'jzoid@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  await Dog.deleteMany();

  // await Dog.create({
  //   userId: '1',
  //   dogName: 'Princess Leia',
  //   profilePicture: 'leia-snow.jpg',
  //   pictures: 'leia-snow.jpg',
  //   gender: 'Girl',
  //   breed: 'Golden Retriever',
  //   birthday: '05/07/2017',
  //   preferences: ['must be fixed', 'not aggressive', 'has all shots'],
  //   petParent: [User.user.name]
  // });

  console.log('Dogs seeded');
  
  process.exit();
});