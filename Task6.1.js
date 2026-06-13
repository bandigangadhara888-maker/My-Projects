let employeeName = "Ravi";
let salary = 50000;
let experience = 4;
let finalSalary;

if (experience >= 5){
    finalSalary = salary +(salary * 0.20);
}
else if (experience >= 2){
    finalSalary = salary + (salary * 0.10);
}
else{
    finalSalary = salary + (salary * 0.05);
}
console.log("Employee Name :" , employeeName);
console.log("Final Salary :" ,finalSalary);