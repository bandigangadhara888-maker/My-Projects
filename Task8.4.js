function checkTrafficSignal(signal) {
  let action = "";
  let fine = 0;

  switch (signal.toLowerCase()) {
    case "red":
      action = "Stop!";
      fine = 500; // Fine applied for potential violation
      break;
    case "yellow":
      action = "Slow down and prepare to stop.";
      fine = 0;
      break;
    case "green":
      action = "Go!";
      fine = 0;
      break;
    default:
      action = "Invalid Input / Rule Violation.";
      fine = 1000;
  }

  console.log("Signal:" , signal);
  console.log("Action:" , action);
  if (fine > 0) {
    console.log("Fine Amount:", fine);
  }
  console.log("-------------------");
}

// Example Outputs
checkTrafficSignal("red");
checkTrafficSignal("green");
checkTrafficSignal("blue"); 