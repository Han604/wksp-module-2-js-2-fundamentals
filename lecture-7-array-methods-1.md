# 2.1.7 - JavaScript Array methods P1

---

- Arrays have a bunch of methods attached to them.
- Many of which you'll use on a daily basis.

---

## Common Array methods

- `.concat()`
- `.join()`

---

### [`.concat()`](https://www.w3schools.com/jsreF/jsref_concat_array.asp)

The `.concat()` method returns a _new_ array with the values of two existing arrays.

```js
// Example
const arrayOne = ['think', 'dream', 'learn', 'write'];
const arrayTwo = ['thought', 'dreams', 'knowledge', 'truth'];

let newArray = arrayOne.concat(arrayTwo);

```

---

### [`.join()`](https://www.w3schools.com/jsreF/jsref_join.asp)

The `.join()` method returns the array as a string.

```js
// Example
const lexicon = ['The', 'large', 'shaggy', 'dog', 'barked', 'at', 'the', 'silence'];

let sentence = lexicon.join();
lexicon.join(' ') //will return strings with space no comma
--- 
//different from toString, toString will not be manipulated with (' ')

```

---

And there are so many more.

---

## Exercise

Let's dip into the internet and see if we can learn all of these methods collectively.

1. `.includes()` - searches for a value then returns a boolean. 
let summer = ['annoying', 'sister', 'warrior'];
console.log('.includes() ', summer.includes('sister'))

2. `.slice()` - slice selected from a begin and an end (not necessary) returns a shallow version of the array counting the items. === strict
let veg = ['carrot', 'celery', 'cabbage', 'brocoli', 'onion']
const cruciferousVeg = veg.slice(2,4)

3. `.indexOf()`, searches for first occurance of value or string
let yoda = ['size', 'matters', 'not']
let jedi = yoda.indexOf('not');
console.log(jedi);

4. `.push()` adds items to the end of the array and mutates the existing array
let outfit = ['shoes', 'pants', 'shirt'];
outfit.push('hat', 'purse', 'coat')
console.log(outfit);

5. `.pop()`, removes the last element of an array and returns it, with no arguements, mutates the array
let outfit = ['shoes', 'pants', 'shirt'];
console.log(outfits.pop())

6. `.sort()` sorts the array alphabetically and returns the array and mutates it.
let veg = ['carrot', 'celery', 'cabbage', 'brocoli', 'onion']
console.log(veg.sort())

7. `.shift()` removes the first item from an array and returns it, with no arguements, mutates the array
let outfit = ['shoes', 'pants', 'shirt'];
console.log(outfits.shift())

8. `.unshift()` adds items to the beginning of the array mutates it too
let outfit = ['shoes', 'pants', 'shirt'];
outfit.unshift('wallet')

9. `.reverse()`, reverses the elements, mutates it too
let backtalk = ['backwards', 'is', 'this']
backtalk.reverse();
console.log(backtalk)

10. `.lastIndexOf()` searches for an element, from the end to the front
let yoda = ['size', 'matters', 'not']
let jedi = yoda.lastIndexOf('not');
console.log(jedi);

11. `.splice()` removes and replaces instances of items //read up on this one i don't get it
let array = [1, 2, 3, 4]
array.splice(0, 2, 'string');
console.log(array);

12. `.toString()`


- Split into teams of 2.
- Take given methods
    - find an explanation/definition, then write your own.
    - create two examples of each method in use. Be creative. 😛

---

[Next lecture: Functions](../lecture-8-functions)