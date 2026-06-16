function checkAdmission(student) {
  // Check if Age is 18+ and Percentage is 60+
  if (student.age >= 18 && student.percentage >= 60) {
    return student.name;
  }
   else {
    return student.name;
  }
}

// Student Object (Example Data)
const applicant = {
  name: "John Doe",
  age: 19,
  percentage: 75
};

// Return and display the admission status
const status = checkAdmission(applicant);
console.log(status);