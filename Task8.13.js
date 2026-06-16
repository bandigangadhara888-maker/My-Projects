const patients = [
  { id: 101, name: "Alice", status: "Stable" },
  { id: 102, name: "Bob", status: "Critical" },
  { id: 103, name: "Charlie", status: "Stable" },
  { id: 104, name: "David", status: "Critical" }
];

// 1. Find critical patients
const criticalPatients = patients.filter(p => p.status === "Critical");

// 2. Find patient by ID (e.g., ID 102)
const patientById = patients.find(p => p.id === 102);

// 3. Count total patients
const totalPatients = patients.length;

// Output results
console.log("Critical Patients:", criticalPatients);
console.log("Patient with ID 102:", patientById);
console.log("Total Patients:", totalPatients);