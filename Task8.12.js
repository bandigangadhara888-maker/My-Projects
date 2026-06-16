 const plan = "Standard"; // Can be: "Mobile", "Basic", "Standard", "Premium"

// Chained ternary operator to display plan benefits
const benefits = 
  plan.toLowerCase() === "mobile" ? "Mobile: 1 screen, 480p resolution, mobile/tablet only." :
  plan.toLowerCase() === "basic" ? "Basic: 1 screen, 720p resolution, all devices." :
  plan.toLowerCase() === "standard" ? "Standard: 2 screens, 1080p Full HD, all devices." :
  plan.toLowerCase() === "premium" ? "Premium: 4 screens, 4K+HDR, Spatial Audio." :
  "Unknown plan selected.";

console.log(benefits);