 const electronics = [
  { id: 101, name: "Laptop", price: 800 },
  { id: 102, name: "Mouse", price: 20 }
];

const furniture = [
  { id: 201, name: "Desk", price: 150 },
  { id: 202, name: "Chair", price: 80 }
];

// 2. Merge two inventory arrays using Spread Operator
let fullInventory = [...electronics, ...furniture];

// 3. Add new products using Spread Operator
const newProduct = { id: 301, name: "Keyboard", price: 45 };
fullInventory = [...fullInventory, newProduct];

// 4. Extract product details using Destructuring
const [firstItem] = fullInventory; // Array destructuring to get the first object
const { name, price } = firstItem; // Object destructuring to get specific details

console.log("Full Inventory:", fullInventory);
console.log('First Product: ${name} costs $${price}');
