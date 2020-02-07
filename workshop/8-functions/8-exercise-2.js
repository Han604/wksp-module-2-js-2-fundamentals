// Q2a
// Write a function that accepts two integers and returns
// the greater one. (this is slightly different from the previous question.)

// Also, wouldn't it be nice if there were a Math method that could simplify the code....
// https://www.w3schools.com/jsreF/jsref_obj_math.asp


function greater(num1, num2){
    if (num1 > num2) {
        return num1;
    } else if (num1 < num2) {
        return num2;
    } else {
        return "equal"
    }
}


// Q2b
// Without changing the function at all, 
// can you figure out how we could use it to determine the greater number between 4 integers?

let greaterNumber = greater(greater(15, 22), greater(19, 800));

// Q2c
// Would this work with more integers? 

NO