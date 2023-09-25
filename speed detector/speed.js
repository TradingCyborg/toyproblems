function speedDetector(speed) {
    const speedLimit = 70;
    const pointsPer5KmphOver = 1;
    const maxDemeritPoints = 12;
  
    if (speed <= speedLimit) {
      console.log("Ok");
    } else {
      const demeritPoints = Math.floor((speed - speedLimit) / 5);
      if (demeritPoints > maxDemeritPoints) {
        console.log("License suspended");
      } else {
        console.log(`Points: ${demeritPoints}`);
      }
    }
  }
  
  // Get the speed from the user
  const speed = parseFloat(prompt("Enter the speed of the car (in km/h):"));
  
  if (!isNaN(speed)) { // Check if the input is a valid number
    speedDetector(speed);
  } else {
    console.log("Invalid input. Please enter a number for the speed.");
  }
  