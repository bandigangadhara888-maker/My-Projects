const productsDiv = document.getElementById("products");
const searchInput = document.getElementById("search");
const categorySelect = document.getElementById("category");
const cartItemsDiv = document.getElementById("cartItems");
const totalElement = document.getElementById("total");

let products = [];
let cart = [];

async function fetchProducts() {
    const response = await fetch(
        "https://fakestoreapi.com/products"
    );

    products = await response.json();

    displayProducts(products);
    loadCategories();
}

function displayProducts(data) {
    productsDiv.innerHTML = "";

    data.forEach(product => {
        const card = document.createElement("div");

        card.className = "card";

        card.innerHTML = `
            <img src="${product.image}">
            <h4>${product.title}</h4>
            <p>$${product.price}</p>
            <button onclick="addToCart(${product.id})">
                Add To Cart
            </button>
        `;

        productsDiv.appendChild(card);
    });
}

function loadCategories() {
    const categories = [
        ...new Set(products.map(p => p.category))
    ];

    categories.forEach(category => {
        const option = document.createElement("option");

        option.value = category;
        option.textContent = category;

        categorySelect.appendChild(option);
    });
}

searchInput.addEventListener("input", filterProducts);

categorySelect.addEventListener("change", filterProducts);

function filterProducts() {
    const searchText =
        searchInput.value.toLowerCase();

    const selectedCategory =
        categorySelect.value;

    let filtered = products.filter(product => {
        const matchTitle =
            product.title
            .toLowerCase()
            .includes(searchText);

        const matchCategory =
            selectedCategory === "all" ||
            product.category === selectedCategory;

        return matchTitle && matchCategory;
    });

    displayProducts(filtered);
}

function addToCart(id) {
    const product =
        products.find(p => p.id === id);

    cart.push(product);

    renderCart();
}

function renderCart() {
    cartItemsDiv.innerHTML = "";

    let total = 0;

    cart.forEach(item => {
        total += item.price;

        const div = document.createElement("div");

        div.className = "cart-item";

        div.innerHTML = `
            <p>${item.title}</p>
            <strong>$${item.price}</strong>
        `;

        cartItemsDiv.appendChild(div);
    });

    totalElement.textContent =
        total.toFixed(2);
}

fetchProducts();