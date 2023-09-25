function calculateGrade() {
    try {
      const marks = parseFloat(prompt("Enter student marks (0-100):"));
      if (!isNaN(marks) && marks >= 0 && marks <= 100)
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
        alert(`Grade: ${grade}`);
      } else {
        alert("Invalid input! Marks should be between 0 and 100.");
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    }
  calculateGrade();
  