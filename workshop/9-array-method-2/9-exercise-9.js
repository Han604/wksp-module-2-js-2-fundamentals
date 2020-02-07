// Q9
// Write a function that accepts an array of grades (numerical values) and returns the average.
// The returned average should also be rounded to the nearest unit. (no decimals, please!)

function calculateAverage(grades) {
    let gradeAvg = 0;
    grades.forEach(function(num){
        gradeAvg = gradeAvg + num;
    });
    avg = Math.round(gradeAvg/grades.length);
    return avg
}

console.log(calculateAverage([76, 60, 83, 100, 78]));