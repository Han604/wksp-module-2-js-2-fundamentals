// Q10
// Build on what you did for Q9.
// This time the function should return a letter grade instead of the average.
// Here is how I calculate the grades
// <60 	is F
// <70 	is D
// <80 	is C
// <90 	is B
// <100 is A

// Write function here

function calculateAverage(grades) {
    let gradeAvg = 0;
    grades.forEach(function(num){
        gradeAvg = gradeAvg + num;
    });
    avg = Math.round(gradeAvg/grades.length);
    console.log(avg);
    return avg
}

function lettergrade(grade) {
    let letter = "A"
    if (grade <= 100 && grade > 90) {
        letter = "A";
    }
    if (grade <= 90 && grade > 80) {
        letter = "B";
    }
    if (grade <= 80 && grade > 70) {
        letter = "C";
    }
    if (grade <= 70 || grade > 60) {
        letter = "D";
    }
    if (grade <= 60) {
        letter = "F";
    }
    return letter;
}

console.log(lettergrade(calculateAverage([48, 95, 65, 48, 59, 78, 72, 65, 5])));

// Call the function with [48, 95, 65, 48, 59, 78, 72, 65]

// Try with other values as well


