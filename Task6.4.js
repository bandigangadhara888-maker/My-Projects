const students = [
    "Ravi", "Ramu", "Raj", "Charlie", "Raghu",
     "Frank", "Grace", "Heidi", "Ivan", "Judy"
];
let count = 0;
for(const student of students ){
    console.log(student);
    count++;
}
console.log("Total students:" + students.length);