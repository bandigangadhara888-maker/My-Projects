const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Mobile", price: 20000 },
    { id: 3, name: "Headphones", price: 3000 },
    { id: 4, name: "Smart Watch", price: 8000 },
    { id: 5, name: "Tablet", price: 15000 }
];

function calculateStats() {

    // Total Products
    const totalProducts = products.length;

    // Average Price using reduce()
    const totalPrice = products.reduce((sum, product) => {
        return sum + product.price;
    }, 0);

    const averagePrice = (totalPrice / totalProducts).toFixed(2);

    // Highest Price Product using sort()
    const highestProduct = [...products]
        .sort((a, b) => b.price - a.price)[0];

    // Lowest Price Product using sort()
    const lowestProduct = [...products]
        .sort((a, b) => a.price - b.price)[0];

    // find() example
    const foundProduct = products.find(
        product => product.name === "Mobile"
    );

    document.getElementById("result").innerHTML = `
        <h3>Results</h3>
        <p><strong>Total Products:</strong> ${totalProducts}</p>
        <p><strong>Average Price:</strong> ₹${averagePrice}</p>
        <p><strong>Highest Price Product:</strong> ${highestProduct.name} (₹${highestProduct.price})</p>
        <p><strong>Lowest Price Product:</strong> ${lowestProduct.name} (₹${lowestProduct.price})</p>
        <p><strong>Found Product (find()):</strong> ${foundProduct.name}</p>
    `;
}