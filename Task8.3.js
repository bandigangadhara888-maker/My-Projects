const cart = [
  { product: "Shoes", price: 2000, qty: 2 },
  { product: "Watch", price: 1500, qty: 1 },
  { product: "Bag", price: 1000, qty: 3 }
];

// 1. Calculate total bill
const totalBill = cart.reduce((total, item) => total + (item.price * item.qty), 0);

// 2. Find the most expensive product
const mostExpensive = cart.reduce((prev, current) => (prev.price > current.price) ? prev : current);

// 3. Display all product names
const productNames = cart.map(item => item.product);

// Output
console.log("Total Bill:", totalBill);
console.log("Most Expensive Product:", mostExpensive.product);
console.log("Product Names:", productNames);