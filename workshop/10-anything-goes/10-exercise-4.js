// Q4
// Write a function that filters out the non-unique values in an array.
// This function should accept an array as an argument and return a new array.

// Hint: consider using .filter(), .indexOf() and .lastIndexOf()

// function filterNonUnique(array) {
//     numCount = 0
//     for (i = 0; i < array.length; i ++) {
//         if array[i].includes(array) {
//             numCount += 1
//         }
//         if numCount > 0
//     }
    
//     array.filter(function(num){

//     })
// }

function filterNonUnique(array) {
    let newArray = array.filter(function(num) {
        return array.indexOf(num) === array.lastIndexOf(num)
    });
    return newArray;
}

console.log(filterNonUnique([1,2,3,3,4,5,6,7,7,8]));
