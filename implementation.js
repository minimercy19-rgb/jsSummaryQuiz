/*Variables and Data Types: 
Declare three separate variables using let, const, and var to store your full name (string), your age (number), and whether you are enrolled in a class (boolean). 
Log each variable and its corresponding typeof result to the console.*/

// 1. Declare the variables
let fullName = "Nancy Mancy";           
const personalAge = 22;                      
var isEnrolled = true;              

// 2. Log each variable and its type
console.log(fullName, typeof fullName);        
console.log(personalAge, typeof personalAge);                  
console.log(isEnrolled, typeof isEnrolled);

/*Operators and Type Coercion: 
Write a code snippet that demonstrates type coercion by attempting to add a numeric string (e.g., "5") to a number (e.g., 10), and contrast this with using the multiplication operator on the same values.*/ 

let numI = "5";
let numII = 10;

console.log(numI + numII);  

console.log(numI * numII);

/*Conditional Statements (if...else): 
Write an if...else if...else statement that evaluates a variable representing a movie ticket buyer's age. 
The code should output different pricing tiers: children under 5 get in free, youth aged 5 to 17 get a child discount, adults aged 18 to 64 pay full price, and seniors 65 and older get a senior discount.*/

let age = 65;   

if (age < 5) {
  console.log("Free entry (Children under 5)");
} else if (age >= 5 && age <= 17) {
  console.log("Child discount (Youth 5-17)");
} else if (age >= 18 && age <= 64) {
  console.log("Full price (Adults 18-64)");
} else {
  console.log("Senior discount (65 and older)");
}

/*Conditional (Ternary) Operator: 
Create a variable holding a user's account balance. 
Use the ternary operator to evaluate whether the balance is less than zero; if true, assign the string "Account Overdrawn", otherwise assign "Account Active".*/

let balance = 50;   

let accountStatus = balance < 0 ? "Account Overdrawn" : "Account Active";

console.log(accountStatus);

/*Comprehensive Challenge: 
Write a short script using variables, arithmetic operators, and a switch statement that calculates a final grade based on a numeric score out of 100 divided into ranges for grades A, B, C, D, and F.*/

let score = 46;
let grade;

switch (true) {
  case score >= 90:
    grade = "A";
    break;
  case score >= 80:
    grade = "B";
    break;
  case score >= 70:
    grade = "C";
    break;
  case score >= 60:
    grade = "D";
    break;
  default:
    grade = "F";
}

console.log(`Score: ${score} your Grade is: ${grade}`);