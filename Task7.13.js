const customers = [
  { name: "Rahul", purchaseAmount: 25000 },
  { name: "Priya", purchaseAmount: 45000 },
  { name: "Amit", purchaseAmount: 60000 },
  { name: "Sneha", purchaseAmount: 80000 }
];

const premiumCustomer = customers.find(
  customer => customer.purchaseAmount > 50000
);

console.log("First Premium Customer:");
console.log(premiumCustomer);s