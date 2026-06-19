fetch('https://fakestoreapi.com/products/1')
  .then(response => response.json())
  .then(product => {
    const container = document.getElementById('product-container');
    
    // Creating the Product Card content
    container.innerHTML = `
      <div class="product-card">
        <img src="${product.image}" alt="Product Image" class="product-image">
        <h3>${product.title}</h3>
        <p class="category">${product.category}</p>
        <p class="price">$${product.price}</p>
        <p class="rating">Rating: ${product.rating.rate} ⭐</p>
      </div>
    `;
  })
  .catch(error => console.error('Error fetching product:', error))
  .finally(() => {
    console.log('Fetch attempt finished.');
  });