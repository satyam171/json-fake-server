var faker = require('faker'); 
var fs = require('fs'); 

module.exports = () => {
    const data = { products: [] }
    // Create 1000 products
    for (let i = 0; i < 1000; i++) {
      data.products.push({ 
        id: i, 
        productName: faker.commerce.productName(),
        color: faker.commerce.color(),  
        price: faker.commerce.price(), 
        productAdjective: faker.commerce.productAdjective(), 
        productMaterial: faker.commerce.productMaterial(), 
        image: faker.image.fashion()
        })
    }
    return data; 
  }





  


  