function calculateSalary(basicSalary){
    return basicSalary;
}
function calculateBounus(salary){
    let bonus = salary * 0.10;
    return salary + bonus;
}
let salary = calculateSalary(50000);
let finalSalary = calculateBounus(salary);
  

console.log("salary:", salary);
console.log("Final Salary with Bonus:", finalSalary);