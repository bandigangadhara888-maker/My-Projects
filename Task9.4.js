const products = [
  { name: "T-Shirt", category: "Men's Clothing" },
  { name: "Ring", category: "Jewelry" },
  { name: "Laptop", category: "Electronics" },
  { name: "Dress", category: "Women's Clothing" }
];

const categorySelect = document.getElementById('categorySelect');
const display = document.getElementById('productDisplay');

function renderProducts(filteredList) {
  display.innerHTML = filteredList
    .map(p => <p>${p.name} - <b>${p.category}</b></p>)
    .join('');
}

categorySelect.addEventListener('change', (e) => {
  const selected = e.target.value;
  
  // Logic: If 'All' is picked, show everything; otherwise filter by category
  const filtered = selected === "All" 
    ? products 
    : products.filter(p => p.category === selected);
    
  renderProducts(filtered);
});

// Initial load
renderProducts(products);