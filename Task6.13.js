const employees =[
    {id : 1, name : "Rahul", salary : 25000},
    {id : 2, name : "Kavil", salary : 30000},
    {id : 3, name : "John", salary : 40000}
];
console.log ("Employee names:");
for(let i = 0; i < employees.length; i++){
    console.log(employees[i].name);
}
let totalSalary = 0;
for (let i = 0; i < employees.length; i++){
    totalSalary += employees[i].salary;
}
console.log("Total Salary Expense:" ,totalSalary);

let highestSalaryEmp = employees[0];
for(let i = 0; i < employees.length; i++){
    if(employees[i].salary > highestSalaryEmp.salary){
        highestSalaryEmp = employees[i];
    }

}
console.log("Highest Salary Employee:" , highestSalaryEmp.name);
console.log("Salary :" , highestSalaryEmp.salary);