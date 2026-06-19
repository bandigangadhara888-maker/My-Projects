// Store product in:
let cart = [];

const addToCartBtn = document.getElementById('add-to-cart-btn');
const cartCountDisplay = document.getElementById('cart-count');

// When user clicks Add To Cart:
addToCartBtn.addEventListener('click', () => {
    const product = "Product Name"; // Example product
    
    // Use push()
    cart.push(product);
    
    // Show cart count dynamically
    updateCartUI();
});

function updateCartUI() {
    cartCountDisplay.innerText = cart.length;
    console.log("Current Cart:", cart);
}