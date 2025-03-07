// Create a program that prompts the user to input their score
let score = prompt("Please enter your score:");

// Use else if statements to assign grades based on the criteria
if (score >= 90) {
    console.log("Excellent");
} else if (score >= 80) {
    console.log("Good");
} else if (score >= 70) {
    console.log("Fair");
} else {
    console.log("Needs Improvement");
}
