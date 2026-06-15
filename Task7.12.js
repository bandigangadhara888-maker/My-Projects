const products =[
    {name: "Laptop", price: 64000, category:"Electronics"},
    {name: "Mobile", price: 25000, category: "Electronics"},
    {name: "TV", price:53000, category: "Electronics"}
];
const expesiveProducts = products.filter(product => product.price > 5000);

console.log ("Products above ₹5000:");
console.log(expesiveProducts);