const students = [
  { name: "A", mark: 95 },
  { name: "B", mark: 45 },
  { name: "C", mark: 80 },
  { name: "D", mark: 30 }
];

// 1. Find passed students (Mark >= 50)
const passedStudents = students.filter(s => s.mark >= 50);

// 2. Find failed students (Mark < 50)
const failedStudents = students.filter(s => s.mark < 50);

// 3. Create grade list
const gradeList = students.map(s => {
  let grade = "F";
  if (s.mark >= 90) grade = "A+";
  else if (s.mark >= 80) grade = "A";
  else if (s.mark >= 50) grade = "B";
  
  return { ...s, grade };
});

console.log("Passed:", passedStudents);
console.log("Failed:", failedStudents);
console.log("Grades:", gradeList);
  
