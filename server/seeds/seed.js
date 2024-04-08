const db = require('./connection');
const { User, Product, Category, Clothing } = require('../models');
require('../images');


db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Gifts' },
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'T-Shirt',
      description:
        '100% Cotton',
      image: 't-shirt.png',
      category: categories[0]._id,
      price: 9.99,
      quantity: 300
    },
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Philip',
    lastName: 'Fry',
    email: 'fry@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'John',
    lastName: 'Zoidberg',
    email: 'jzoid@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  await Clothing.deleteMany();

  await Clothing.create({
    userId: '1',
    clothingName: 'Vest',
    profilePicture: '',
    pictures: 'vest.jpg',
    clothingType: 'Shirt',
    price: '10',
    clothingOwner: [
        {
            User: User.firstName
        }
    ]
  });

  console.log('Clothings seeded');
  
  process.exit();
});