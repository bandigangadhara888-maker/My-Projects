const candidates = [
  { name: "Arjun", skills: ["HTML", "CSS", "JavaScript"] },
  { name: "Sara", skills: ["Python", "Django", "React"] },
  { name: "Leo", skills: ["Java", "Spring Boot"] }
];

// Using the some() method
const hasReactDeveloper = candidates.some(candidate => 
  candidate.skills.includes("React")
);
if (hasReactDeveloper) {
  console.log("Success: At least one candidate knows React.");
} else {
  console.log("No candidates found with React skills.");
}