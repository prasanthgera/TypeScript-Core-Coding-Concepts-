//  ============================================================================
//  🌟 JavaScript / TypeScript Core Concepts Practice
//  Author: Prasanth Gera
//  Description: A simple file explaining JS/TS fundamentals with examples.
//  ============================================================================


// -------------------------------------------
// 🧩 1. Function Currying (Basic & Infinite)
// -------------------------------------------

// Simple currying example: function returning another function
function functionCurring(a: number) {
  return function multiply(b: number) {
    return a * b;
  };
}
// Usage: console.log(functionCurring(2)(4)); // Output: 8


// Infinite currying: continues until we pass no argument
function infiniteCurring(a: number) {
  return function next(b?: number): any {
    if (b !== undefined) {
      return infiniteCurring(a + b);
    } else {
      return a;
    }
  };
}
// Usage: console.log(infiniteCurring(2)(4)(6)()); // Output: 12



// -------------------------------------------
// 🧠 2. First-Order vs Higher-Order Functions
// -------------------------------------------

// ✅ First-order: takes inputs and returns a value
function firstOrderFunction(a: number, b: number) {
  return a + b;
}

// ✅ Higher-order: returns another function
function higherOrderFunction(a: number) {
  return function inner(b: number) {
    return a + b;
  };
}
// Usage: console.log(higherOrderFunction(2)(3)); // Output: 5



// -------------------------------------------
// 🔢 3. Sorting Numbers (With & Without sort())
// -------------------------------------------

// Manual bubble sort
let array = [2, 88, 55, 4];
for (let i = 0; i < array.length - 1; i++) {
  for (let j = 0; j < array.length - 1 - i; j++) {
    if (array[j] > array[j + 1]) {
      let temp = array[j];
      array[j] = array[j + 1];
      array[j + 1] = temp;
    }
  }
}
// console.log(array); // [2, 4, 55, 88]
// console.log(array.sort()); // same output but simpler



// -------------------------------------------
// 🧱 4. Var vs Let Scope
// -------------------------------------------

var a1 = 10;
{
  var a1 = -10; // same scope, overrides
}
console.log(a1); // Output: -10

let b1 = 10;
{
  let b1 = -10; // block scope, doesn't override
}
console.log(b1); // Output: 10



// -------------------------------------------
// 🔁 5. Find & Remove Duplicates in Array
// -------------------------------------------

let duplicateArr = [2, 3, 4, 2, 5, 6, 4];
let duplicates: number[] = [];

for (let i = 0; i < duplicateArr.length; i++) {
  for (let j = i + 1; j < duplicateArr.length; j++) {
    if (duplicateArr[i] === duplicateArr[j]) {
      duplicates.push(duplicateArr[i]);
    }
  }
}
// console.log(duplicates); // [2, 4]

// Remove duplicates (manual way)
function removeDuplicatesLoop(arr: number[]): number[] {
  const result: number[] = [];
  for (let num of arr) {
    if (!result.includes(num)) {
      result.push(num);
    }
  }
  return result;
}
// console.log(removeDuplicatesLoop(duplicateArr)); // [2,3,4,5,6]



// -------------------------------------------
// 🔄 6. Reverse an Array Manually
// -------------------------------------------

let reverseArr = [1, 2, 3, 4, 5];
let reversed: number[] = [];
for (let i = reverseArr.length - 1; i >= 0; i--) {
  reversed.push(reverseArr[i]);
}
// console.log(reversed); // [5, 4, 3, 2, 1]



// -------------------------------------------
// ✍️ 7. Capitalize Each Word
// -------------------------------------------

let inputString = 'this is prasanth gera';
let words = inputString.split(' ');
let capitalized = words
  .map(w => w[0].toUpperCase() + w.slice(1))
  .join(' ');
// console.log(capitalized); // "This Is Prasanth Gera"



// -------------------------------------------
// 🔁 8. Check Palindrome
// -------------------------------------------

function checkPalindrome(word: string) {
  let reversed = word.split('').reverse().join('');
  return word === reversed;
}
// console.log(checkPalindrome('madam')); // true



// -------------------------------------------
// ⏱️ 9. Var vs Let in setTimeout (Closure Example)
// -------------------------------------------

for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log('var:', i), 1000); // prints 5 five times
}

for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log('let:', i), 1000); // prints 0–4 correctly
}



// -------------------------------------------
// 🧮 10. Postfix vs Prefix Increment
// -------------------------------------------

let v7 = 100;
++v7;
console.log(v7); // 101



// -------------------------------------------
// 🧱 11. Flatten Nested Arrays
// -------------------------------------------

const nested = [[[[1, 2, 3], [4, 5, 6]]]];
const flatArray: number[] = [];

for (const arr of nested) {
  for (const inner of arr) {
    for (const group of inner) {
      flatArray.push(...group);
    }
  }
}
// console.log(flatArray); // [1, 2, 3, 4, 5, 6]

// Simpler example:
const anotherNestedArr = [1, 2, [3, 4], 5, [6, 7]];
let resultArray: number[] = [];

for (let item of anotherNestedArr) {
  if (Array.isArray(item)) {
    resultArray.push(...item);
  } else {
    resultArray.push(item);
  }
}
// console.log(resultArray); // [1, 2, 3, 4, 5, 6, 7]



// -------------------------------------------
// 🔒 12. Closure Example (Counter)
// -------------------------------------------

function createCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const myCounter = createCounter();
// console.log(myCounter()); // 1
// console.log(myCounter()); // 2



// -------------------------------------------
// 🍎 13. Array Shift and Unshift
// -------------------------------------------

const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
fruits.shift(); // removes first element
fruits.unshift('Banana'); // adds to start
// console.log(fruits); // ["Banana", "Orange", "Apple", "Mango"]



// -------------------------------------------
// ✖️ 14. Another Currying Example
// -------------------------------------------

function multiplyBy(b: number) {
  return function (a: number) {
    return a * b;
  };
}
const timesFive = multiplyBy(5);
// console.log(timesFive(2)); // 10



// -------------------------------------------
// 🔟 15. Print Even & Odd Numbers
// -------------------------------------------

function printEvenNumbers() {
  const evens: number[] = [];
  for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) evens.push(i);
  }
  return evens;
}

function printOddNumbers() {
  const odds: number[] = [];
  for (let i = 1; i <= 10; i++) {
    if (i % 2 === 1) odds.push(i);
  }
  return odds;
}

// console.log(printEvenNumbers()); // [2, 4, 6, 8, 10]
// console.log(printOddNumbers());  // [1, 3, 5, 7, 9]


// ============================================================================
// 💡 End of File
// ============================================================================

