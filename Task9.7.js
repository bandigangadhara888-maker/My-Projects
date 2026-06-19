// Initial data
let cart = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Headphones" },
  { id: 3, name: "Mouse" }
];

const listElement = document.getElementById('product-list');

// Function to remove product
function removeProduct(id) {
  // filter() keeps everything EXCEPT the item with the target id
  cart = cart.filter(product => product.id !== id);
  renderCart();
}

// Function to display the cart
function renderCart() {
  listElement.innerHTML = cart.map(product => `
    <li class="cart-item">
      ${product.name}
      <button class="remove-btn" onclick="removeProduct(${product.id})">Remove</button>
    </li>
  `).join('');
}

renderCart();