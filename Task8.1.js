const employees = [
  { id: 1, name: "Rahul", salary: 25000 },
  { id: 2, name: "Kavin", salary: 50000 },
  { id: 3, name: "John", salary: 75000 }
];

// 1. Find employees whose salary is above ₹40,000
const highEarners = employees.filter(emp => emp.salary > 40000);

// 2. Find the first employee whose salary is above ₹60,000
const firstHighEarner = employees.find(emp => emp.salary > 60000);

// 3. Calculate total company salary expense
const totalExpense = employees.reduce((acc, emp) => acc + emp.salary, 0);

// 4. Create a new array containing only employee names
const employeeNames = employees.map(emp => emp.name);

// Output results
console.log("High Earners:", highEarners);
console.log("First employee > 60k:", firstHighEarner);
console.log("Total Expense:", totalExpense);
console.log("Employee Names:", employeeNames);