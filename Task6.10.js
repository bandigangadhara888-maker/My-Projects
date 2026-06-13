 const patient = {
    patientName : "Rahul",
    age : 40,
    disease: "Fever",
    doctor: "Dr Ramesh"
};
console.log("Patient Details:");
for (let key in patient){
    console.log (key + ":" + patient[key]);
}
const {patientName, age,disease,doctor} = patient;

console.log ("Using Destructuring:");
console.log ("Patient Name:", patientName);
console.log ("Age:" , age);
console.log ("disease:", disease);
console.log ("Doctor: ", doctor);