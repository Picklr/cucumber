const Products = require('./server/db/models/foodProducts');
const db = require('./server/db')

// name brand price photo totalSales category stars tags

const ourSeed = [
  {
    name: 'Gowanus Ice Cream',
    brand: 'Ample Hills',
    price: 7.99,
    photo: '/photography/ampleHills.png',
    totalSales: 5,
    category: 'Ice Cream',
    stars: 5,
    tags: ['Ice Cream', 'Dessert', 'Small-Batch']
  },

  {
    name: 'Earl Grey Ice Cream',
    brand: 'Van Leeuwen',
    price: 7.99,
    photo: '/photography/vanleeuwen.jpg',
    totalSales: 7,
    category: 'Ice Cream',
    stars: 3.0,
    tags: ['Ice Cream', 'Small Batch', 'Organic', 'Brooklyn']
  },
  {
    name: '4-pack patty',
    brand: 'Impossible Burger',
    price: 14.99,
    photo: '/photography/burger.jpg',
    totalSales: 8,
    category: 'Vegetarian',
    stars: 4.0,
    tags: ['Burger', 'Vegan', 'Health', 'Organic']
  },
  {
    name: '6-pack patty',
    brand: 'Beyond Meat',
    price: 14.99,
    photo: '/photography/burger.jpg',
    totalSales: 15,
    category: 'Vegetarian',
    stars: 5.0,
    tags: ['Burger', 'Vegan', 'Health', 'Meat']
  },
  {
    name: 'Whole Free-Range Bird',
    brand: 'PurBird',
    price: 19.99,
    photo: '/photography/chicken.jpg',
    totalSales: 25,
    category: 'Chicken',
    stars: 4.5,
    tags: ['Chicken', 'Poultry', 'Free Range', 'Organic']
  },
  {
    name: 'Cara Cara Oranges',
    brand: 'United Fruit Company',
    price: 2.0,
    photo: '/photography/oranges.jpg',
    totalSales: 40,
    category: 'Fruit',
    stars: 5.0,
    tags: ['Fruit', 'Orange', 'Organic', 'Citrus']
  },
  {
    name: 'Kiwi',
    brand: 'New Zealand Fruits',
    price: 1.99,
    photo: '/photography/kiwi.jpg',
    totalSales: 30,
    category: 'Fruit',
    stars: 4.0,
    tags: ['Fruit', 'Exotic', 'Green']
  },
  {
    name: '12oz Kale',
    brand: 'NY Greens',
    price: 5.99,
    photo: '/photography/kale.jpg',
    totalSales: 25,
    category: 'Greens',
    stars: 4.2,
    tags: ['Kale', 'Lettuce', 'Organic', 'Green', 'Health', 'Cruciferous']
  },
  {
    name: '3oz Sardines',
    brand: 'Bar Harbor',
    price: 3.99,
    photo: '/photography/sardines.jpg',
    totalSales: 30,
    category: 'Seafood',
    stars: 4.8,
    tags: ['Seafood', 'Sustainable', 'Canned', 'Fish']
  },
  {
    name: 'Scottish Salmon',
    brand: 'Greenpoint Fish Co',
    price: 19.99,
    photo: '/photography/salmon.jpg',
    totalSales: 21,
    category: 'Seafood',
    stars: 5.0,
    tags: ['Seafood', 'Farmed', 'Fresh', 'Fish']
  },
  {
    name: 'RockFish',
    brand: 'Greenpoint Fish Co',
    price: 14.99,
    photo: '/photography/rockfish.jpg',
    totalSales: 4,
    category: 'Seafood',
    stars: 5.0,
    tags: ['Seafood', 'Farmed', 'Fish', 'Sustainable']
  },
  {
    name: '12oz Arugula',
    brand: 'NY Greens',
    price: 4.99,
    photo: '/photography/arugula.jpg',
    totalSales: 40,
    category: 'Greens',
    stars: 5.0,
    tags: ['Green', 'Kale', 'Lettuce', 'Healthy', 'Organic']
  },
  {
    name: 'Tangelo',
    brand: 'Tangelo Co',
    price: 2.99,
    photo: '/photography/peeled-and-whole-tangelo.jpg',
    totalSales: 4,
    category: 'Fruit',
    stars: 5.0,
    tags: ['Fruit', 'Healthy', 'Sustainable']
  },
  {
    name: 'Lime Tortilla Chips',
    brand: 'Lime Tortilla Chips Co',
    price: 3.99,
    photo: '/photography/tortilla-chips',
    totalSales: 4,
    category: 'Misc',
    stars: 5.0,
    tags: ['Snacks']
  },
  {
    name: 'Organic Avocado',
    brand: 'Avocado Co',
    price: 2.99,
    photo: '/photography/avocado',
    totalSales: 4,
    category: 'Vegetables',
    stars: 5.0,
    tags: ['Vegetables', 'Healthy', 'Organic', 'Green']
  },
  {
    name: 'Tempeh',
    brand: 'Beyond Meat',
    price: 4.99,
    totalSales: 41,
    category: 'Vegetarian',
    stars: 5.0,
    tags: ['Vegetarian', 'Soy', 'Healthy', 'Organic']
  },
  {
    name: 'Firm Tofu',
    brand: 'House Foods',
    price: 3.99,
    totalSales: 87,
    category: 'Vegetarian',
    stars: 5.0,
    tags: ['Vegetarian', 'Soy', 'Healthy', 'Organic']
  },
  {
    name: 'Duck Breast',
    brand: 'Purbird',
    price: 12.99,
    totalSales: 14,
    category: 'Poultry',
    stars: 5.0,
    tags: ['Poultry', 'Meat', 'Free Range', 'Organic']
  },
  {
    name: 'Miso',
    brand: 'House Foods',
    price: 7.99,
    totalSales: 14,
    category: 'Condiments',
    stars: 5.0,
    tags: ['Soy', 'Exotic', 'Japanese', 'Organic']
  },
  {
    name: 'Green Beans',
    brand: 'New Jersey Farms',
    price: 4.99,
    totalSales: 24,
    category: 'Vegetables',
    stars: 5.0,
    tags: ['Green', 'Vegetables', 'Produce', 'Organic']
  },
  {
    name: 'Green Onion',
    brand: 'NY Greens',
    price: 3.99,
    totalSales: 88,
    category: 'Vegetables',
    stars: 5.0,
    tags: ['Green', 'Vegetables', 'Produce', 'Organic', 'Onion']
  },
  {
    name: 'Green Bell Pepper',
    brand: 'New Jersey Farms',
    price: 2.99,
    totalSales: 101,
    category: 'Vegetables',
    stars: 5.0,
    tags: ['Green', 'Vegetables', 'Produce', 'Organic', 'Onion']
  },
  {
    name: 'Pistachio Ice Cream',
    brand: 'Van Leeuwen',
    price: 7.99,
    totalSales: 11,
    category: 'Ice Cream',
    stars: 5.0,
    tags: ['Green', 'Dessert', 'Ice Cream', 'Local']
  },
  {
    name: '100% Cocoa Bar',
    brand: 'Antidote',
    price: 9.99,
    totalSales: 98,
    category: 'Chocolate',
    stars: 5.0,
    tags: ['Organic', 'Dessert', 'Chocolate', 'Local', 'Vegan']
  },
  {
    name: 'Chocolate Pudding',
    brand: 'Jell-o',
    price: 3.99,
    totalSales: 80,
    category: 'Dessert',
    stars: 4.0,
    tags: ['Dessert', 'Chocolate']
  },
  {
    name: 'Chia Pudding',
    brand: 'GT',
    price: 5.99,
    totalSales: 40,
    category: 'Dessert',
    stars: 4.0,
    tags: ['Dessert', 'Organic', 'Healthy', 'SuperFood', 'Vegan']
  },
  {
    name: 'Fruit Cup',
    brand: 'New Jersey Farms',
    price: 5.99,
    totalSales: 48,
    category: 'Fruit',
    stars: 4.0,
    tags: ['Dessert', 'Fruit', 'Healthy', 'Kiwi', 'Melon', 'Vegan']
  },
  {
    name: 'Green Papaya',
    brand: 'Thailand',
    price: 5.99,
    totalSales: 4,
    category: 'Fruit',
    stars: 4.0,
    tags: ['Exotic', 'Fruit', 'Melon']
  },
  {
    name: 'Papaya',
    brand: 'New Jersey Farms',
    price: 5.99,
    totalSales: 4,
    category: 'Fruit',
    stars: 4.0,
    tags: ['Exotic', 'Fruit', 'Melon', 'Orange']
  },
  {
    name: 'Cantaloupe',
    brand: 'New Jersey Farms',
    price: 4.99,
    totalSales: 46,
    category: 'Fruit',
    stars: 4.0,
    tags: ['Fruit', 'Melon', 'Orange']
  },
  {
    name: 'HoneyDew',
    brand: 'New Jersey Farms',
    price: 5.99,
    totalSales: 46,
    category: 'Fruit',
    stars: 4.0,
    tags: ['Fruit', 'Melon', 'Green', 'Healthy']
  }

];

Products.bulkCreate(ourSeed)
.catch(console.error.bind(console))
.finally(_ => {
  db.close()
  console.log('Closed connection.')
  return null
})
