let age = 18;
let percentage = 75;
let entranceExamPassed = true;
if (age >= 18){
    if(percentage >= 75){
        if(entranceExamPassed){
            console.log("Admission Approved");
        }
        else{
            console.log("Admission Rejected: Entance Exam Not Passed");
        }

    }
    else{
        console.log("Admission Rejected: Percentage Below 70");
    }
}
else{ 
    console.log ("Admission Rejected: Age Below 18");
}