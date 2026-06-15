const expenses = [12000, 8000, 15000, 5000, 10000];

const totalExpenses = expenses.reduce(
  (total, expense) => total + expense, 0);

console.log("Total Company Expenses: ₹" + totalExpenses);