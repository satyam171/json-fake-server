var faker = require('faker'); 
var fs = require('fs'); 

// module.exports = () => {
//     const data = { products: [] }
//     // Create 1000 products
//     for (let i = 0; i < 1000; i++) {
//       data.products.push({ 
//         id: i, 
//         productName: faker.commerce.productName(),
//         color: faker.commerce.color(),  
//         price: faker.commerce.price(), 
//         productAdjective: faker.commerce.productAdjective(), 
//         productMaterial: faker.commerce.productMaterial(), 
//         image: faker.image.fashion()
//         })
//     }
//     return data; 
//   }

  // const data = { products: [] }
  // // Create 1000 products
  // for (let i = 0; i < 1000; i++) {
  //   data.products.push({ 
  //     id: i, 
  //     productName: faker.commerce.productName(),
  //     color: faker.commerce.color(),  
  //     price: faker.commerce.price(), 
  //     productAdjective: faker.commerce.productAdjective(), 
  //     productMaterial: faker.commerce.productMaterial(), 
  //     image: faker.image.fashion()
  //     })
  // }

  // fs.appendFile('db.json', JSON.stringify(data, undefined, 1), (err) => {
  //   if (err) throw err;
  //   console.log('The "data to append" was appended to file!');
  // });

  fs.readFile('db.json', (err, data) => {
    if (err) throw err;
    let parsed = JSON.parse(data); 
    let colors = [];
    let adjectives = [];
    let materials = [];
    parsed.products.forEach( item => {
      if(!colors.includes(item.color)) colors.push(item.color);
      if(!adjectives.includes(item.productAdjective)) adjectives.push(item.productAdjective);
      if(!materials.includes(item.productMaterial)) materials.push(item.productMaterial);
    })
    parsed = { ...parsed, colors, adjectives, materials }; 
    fs.writeFile('db.json', JSON.stringify(parsed, undefined, 1), (err) => {
      if (err) throw err;
      console.log('The "data to append" was appended to file!');
    });
  });



  


  