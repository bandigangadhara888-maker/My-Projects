function calculateTotalMarks(studentName, ...marks){
    let total = 0;
    for (let mark of marks){
        total += mark;
    }
    console.log("Student Name :", studentName);
    console.log("Total Marks:", total);
}
calculateTotalMarks("Mahi", 85, 90, 78,88,95);