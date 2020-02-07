// Q5
// Write a JavaScript program to find ALL the Armstrong 
// numbers between 0 and 999, store them in array an output
// that array to the console.

// Note : An Armstrong number of three digits is an integer 
// such that the sum of the cubes of its digits is equal 
// to the number itself. For example,
// 371 is an Armstrong number since 3^3 + 7^3 + 1^3 = 371.

let armstrongNumbers = [];

for (i = 1; i <= 999; i ++) {
    let num = i.toString().split('');
    let sum = 0;
    num.forEach(function(num){
        sum = sum + (num * num * num)
    });
    if (sum === i) {
        armstrongNumbers.unshift(sum);
    }
}

// console.log(armstrongNumbers);

// 8. `.unshift()` adds items to the beginning of the array mutates it too
// let outfit = ['shoes', 'pants', 'shirt'];
// outfit.unshift('wallet')