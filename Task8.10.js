const apiUrl = 'https://fakestoreapi.com/products';

fetch(apiUrl)
  .then(response => response.json())
  .then(products => {
    // 1. Count total products
    console.log('Total Products: ${products.length}');

    console.log("--- Product Titles ---");
    let expensiveProducts = [];

    // 2. Display product titles & 3. Find products above ₹1000
    products.forEach(product => {
      console.log('Title: ${product.title}');
      
      // Note: API prices are usually in USD; treating as numerical value for logic
      if (product.price > 1000) {
        expensiveProducts.push(product.title);
      }
    });

    console.log("--- Products above ₹1000 ---");
    console.log(expensiveProducts.length > 0 ? expensiveProducts : "None found.");
  })
  .catch(error => console.error('Error fetching data:', error));