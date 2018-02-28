const Products = require('./server/db/models/foodProducts');
const db = require('./server/db')

// name brand price photo totalSales category stars tags

const ourSeed = [
  {
    name: 'Gowanus Icecream',
    brand: 'Ample Hills',
    price: 7.99,
    photo: './public/cucumber.jpg',
    totalSales: 5,
    category: 'Ice Cream',
    stars: 5,
    tags: ['Ice Cream', 'Dessert', 'Small-Batch']
  },

  {
    name: 'Earl Grey Ice Cream',
    brand: 'Van Leeuwen',
    price: 7.99,
    photo: './public/cucumber.jpg',
    totalSales: 7,
    category: 'Ice Cream',
    stars: 3.0,
    tags: ['Ice Cream', 'Small Batch', 'Organic', 'Brooklyn']
  },
  {
    name: '4-pack patty',
    brand: 'Impossible Burger',
    price: 14.99,
    photo: './public/cucumber.jpg',
    totalSales: 8,
    category: 'Vegetarian',
    stars: 4.0,
    tags: ['Burger', 'Vegan', 'Health', 'Organic']
  },
  {
    name: '6-pack patty',
    brand: 'Beyond Meat',
    price: 14.99,
    photo: './public/cucumber.jpg',
    totalSales: 15,
    category: 'Vegetarian',
    stars: 5.0,
    tags: ['Burger', 'Vegan', 'Health', 'Meat']
  },
  {
    name: 'Whole Free-Range Bird',
    brand: 'PurBird',
    price: 19.99,
    photo: './public/cucumber.jpg',
    totalSales: 25,
    category: 'Chicken',
    stars: 4.5,
    tags: ['Chicken', 'Poultry', 'Free Range', 'Organic']
  },
  {
    name: 'Cara Cara Oranges',
    brand: 'United Fruit Company',
    price: 2.0,
    photo: './public/cucumber.jpg',
    totalSales: 40,
    category: 'Fruit',
    stars: 5.0,
    tags: ['Fruit', 'Orange', 'Organic', 'Citrus']
  },
  {
    name: 'Kiwi',
    brand: 'New Zealand Fruits',
    price: 1.99,
    photo: './public/cucumber.jpg',
    totalSales: 30,
    category: 'Fruit',
    stars: 4.0,
    tags: ['Fruit', 'Exotic', 'Green']
  },
  {
    name: '12oz Kale',
    brand: 'NY Greens',
    price: 5.99,
    photo: './public/cucumber.jpg',
    totalSales: 25,
    category: 'Greens',
    stars: 4.2,
    tags: ['Kale', 'Lettuce', 'Organic', 'Green', 'Health', 'Cruciferous']
  },
  {
    name: '3oz Sardines',
    brand: 'Bar Harbor',
    price: 3.99,
    photo: './public/cucumber.jpg',
    totalSales: 30,
    category: 'Seafood',
    stars: 4.8,
    tags: ['Seafood', 'Sustainable', 'Canned', 'Fish']
  },
  {
    name: 'Scottish Salmon',
    brand: 'Greenpoint Fish Co',
    price: 19.99,
    photo: './public/cucumber.jpg',
    totalSales: 21,
    category: 'Seafood',
    stars: 5.0,
    tags: ['Seafood', 'Farmed', 'Fresh', 'Fish']
  },
  {
    name: 'RockFish',
    brand: 'Greenpoint Fish Co',
    price: 14.99,
    photo: './public/cucumber.jpg',
    totalSales: 4,
    category: 'Seafood',
    stars: 5.0,
    tags: ['Seafood', 'Farmed', 'Fish', 'Sustainable']
  },
  {
    name: '12oz Arugula',
    brand: 'NY Greens',
    price: 4.99,
    photo: './public/cucumber.jpg',
    totalSales: 40,
    category: 'Greens',
    stars: 5.0,
    tags: ['Green', 'Kale', 'Lettuce', 'Healthy', 'Organic']
  }
];

Products.bulkCreate(ourSeed)
.catch(console.error.bind(console))
.finally(_ => {
  db.close()
  console.log('Closed connection.')
  return null
})
