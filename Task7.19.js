const employees = [
  { name: "Alice", salary: 5000 },
  { name: "Bob", salary: 8000 },
  { name: "Charlie", salary: 3000 },
  { name: "Diana", salary: 6500 }
];

// 1. Highest → Lowest (Descending)
const highestToLowest = [...employees].sort((a, b) => b.salary - a.salary);

// 2. Lowest → Highest (Ascending)
const lowestToHighest = [...employees].sort((a, b) => a.salary - b.salary);

console.log("Highest to Lowest:", highestToLowest);
console.log("Lowest to Highest:", lowestToHighest);