const productContainer = document.getElementById("productContainer");
const searchInput = document.getElementById("searchInput");
const loading = document.getElementById("loading");

let products = [];

function displayProducts(data) {
    productContainer.innerHTML = "";

    data.forEach(product => {
        productContainer.innerHTML += `
            <div class="card">
                <img src="${product.image}" alt="${product.title}">
                <h3>${product.title}</h3>
                <p class="price">$${product.price}</p>
                <p class="category">${product.category}</p>
                <p class="rating">⭐ ${product.rating.rate}</p>
            </div>
        `;
    });
}

fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(data => {
        products = data;
        displayProducts(products);
    })
    .catch(error => {
        productContainer.innerHTML =
            "<h2>Failed to load products.</h2>";
        console.log(error);
    })
    .finally(() => {
        loading.style.display = "none";
    });

searchInput.addEventListener("keyup", () => {
    const searchValue = searchInput.value.toLowerCase();

    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchValue)
    );

    displayProducts(filteredProducts);
});