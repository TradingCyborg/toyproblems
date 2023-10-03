GRADE CALCULATOR READ ME.
This is a simple JavaScript program that calculates the grade for a student based on their mark. The program takes a numeric input from the user (a student's mark), validates it, and then uses a grading system to determine the corresponding grade. Here's a brief explanation of the functions in this program:

getUserInput()
This function prompts the user to enter a student's mark, which should be a number between 0 and 100. It then checks if the input is a valid number within the specified range. If the input is valid, it calls the getGrade() function to determine the grade and displays it in an alert message. If the input is invalid, it displays an error message.

getGrade(mark)
This function takes a numeric mark as its parameter and returns the corresponding grade based on the following grading system:

Marks greater than 79 receive an "A".
Marks between 60 and 79 (inclusive) receive a "B".
Marks between 50 and 59 (inclusive) receive a "C".
Marks between 40 and 49 (inclusive) receive a "D".
Marks less than 40 receive an "E".
How to Use
Include the provided JavaScript code in your project or web page.

To calculate a student's grade, call the getUserInput() function. It will prompt the user to enter a mark, and then it will display the corresponding grade.

javascript
Copy code
getUserInput();
The program will display the grade in an alert message.

SPEED LIMIT CALCULATOR
This JavaScript function, calculatespeed(), is designed to help you calculate whether a driver is within the speed limit and, if not, determine the level of excess speed. It also checks if the driver's license should be suspended based on the speed limit violations. Below is an explanation of how this function works:

calculateSpeed()
This function prompts the user to enter a vehicle's speed and then performs the following checks:

It converts the entered speed into an integer using parseInt().

If the entered speed is 70 kilometers per hour (the speed limit) or less, it displays "Ok" in an alert, indicating that the driver is within the speed limit.

If the entered speed is greater than 70 kilometers per hour, it calculates the excess speed as the difference between the entered speed and the speed limit (70 kilometers per hour).

It then calculates the number of delimitation points (each point represents exceeding the speed limit by 5 kilometers per hour) and uses Math.floor() to round down to the nearest whole number.

If the number of delimitation points is greater than 12, it alerts "License suspended," indicating that the driver's license should be suspended.

If the number of delimitation points is 12 or fewer, it alerts the number of delimitation points, indicating how many points the driver has accumulated.

How to Use
Include the provided JavaScript code in your project or web page.

To use the calculateSpeed() function, call it in your JavaScript code.

javascript
Copy code
calculateSpeed();
The program will prompt the user to enter a vehicle's speed.

It will then determine if the speed is within the speed limit or if there is excess speed and the number of delimitation points.

Based on the outcome, it will display an appropriate alert message.

You can customize and integrate this code into your project or application for tracking and managing speed limit violations and license suspension points. Please note that this code is a basic example and can be extended and enhanced to suit your specific requirements.
Net Salary Calculator Readme
This JavaScript function, calculateNetSalary(), is designed to calculate the net salary of an employee based on their basic salary and benefits while considering deductions for PAYE, NHIF, and NSSF. Below is an explanation of how this function works:

calculateNetSalary()
It retrieves the values of the basic salary and benefits from HTML input elements with the IDs 'basicSalary' and 'benefits', respectively.

It calculates the PAYE (Pay As You Earn) deduction as 10% of the basic salary.

It sets a fixed value for NHIF (National Hospital Insurance Fund) deductions, which is 150 in this case.

It calculates the NSSF (National Social Security Fund) deduction as the lesser of 6% of the basic salary or 6000 (the maximum NSSF contribution allowed by law).

It calculates the gross salary as the sum of the basic salary and benefits.

It calculates the net salary by subtracting PAYE, NHIF, and NSSF deductions from the gross salary.

Finally, it displays the results in an HTML element with the ID 'results'.

How to Use
Include the provided JavaScript code in your HTML file.

Create input fields in your HTML with IDs 'basicSalary' and 'benefits' for users to enter the basic salary and benefits.

html
Copy code
<input type="text" id="basicSalary" placeholder="Enter Basic Salary">
<input type="text" id="benefits" placeholder="Enter Benefits">
Create an HTML element with the ID 'results' where the results will be displayed.
html
Copy code
<div id="results"></div>
To use the calculateNetSalary() function, call it in response to a user action, such as clicking a button.
html
Copy code
<button onclick="calculateNetSalary()">Calculate Net Salary</button>
When the user enters the basic salary and benefits and clicks the button, the function will calculate the net salary and display it in the results element.
AUTHOR.
DANIEL KINYUA WACHIRA. 
LICENSE. 
MORINGA SCHOOL,NGONG,NAIROBI.




can be extended and enhanced to suit your specific payroll calculation needs.
