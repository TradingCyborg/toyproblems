function calculateGrade() {
    try {
      // Prompt the user for input and convert it to a number
      const marks = parseFloat(prompt("Enter student marks (0-100):"));
      
      // Check if the input is within the valid range
      if (!isNaN(marks) && marks >= 0 && marks <= 100) {
        // Determine the grade based on the given criteria
        let grade;
        if (marks > 79) {
          grade = "A";
        } else if (marks >= 60 && marks <= 79) {
          grade = "B";
        } else if (marks >= 50 && marks < 60) {
          grade = "C";
        } else if (marks >= 40 && marks < 50) {
          grade = "D";
        } else {
          grade = "E";
        }
        
        // Display the calculated grade
        alert(`Grade: ${grade}`);
      } else {
        alert("Invalid input! Marks should be between 0 and 100.");
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    }
  }
  
  // Call the function to calculate the grade
  calculateGrade();
  