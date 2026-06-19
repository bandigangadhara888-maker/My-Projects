const statusMsg = document.getElementById('status-message');
const productList = document.getElementById('product-list');

// Simulating an API call
async function loadProducts() {
  try {
    // Start state: "Loading Products..." is already in HTML
    
    const response = await fetch('https://fakestoreapi.com');
    const products = await response.json();

    // After loading: Update status and show data
    statusMsg.innerText = "Products Loaded Successfully!";
    statusMsg.classList.add('success');
    
    // Display products
    products.forEach(item => {
      const p = document.createElement('p');
      p.textContent = item.title;
      productList.appendChild(p);
    });
    console.log(statusMsg);

  } catch (error) {
    statusMsg.innerText = "Failed to load products.";
    statusMsg.style.color = "red";
  }
}

loadProducts();
