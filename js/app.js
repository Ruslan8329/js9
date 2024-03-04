//////////////////////////////////////////////1///////////////////////////////////////////////

let massive = [45, 65, -4, 3, -66, 567, 11, 3];
let sum = 0;

function positiveNum() {
  for (let i = 0; i < massive.length; i++) {
    if (massive[i] > 0) {
      sum += massive[i];
    }
  }
  return sum;
}
let result = positiveNum(massive);
console.log(result);

///////////////////////////////////////////////3////////////////////////////////////////////////////

let num = 15;

function dividers() {
  let divider = [];
  for (let i = 0; i < num; i++) {
    if (num % i === 0) {
      divider++;
    }
  }
  return divider;
}
let result1 = dividers();
console.log(result1);

////////////////////////////////////////////////5////////////////////////////////////////////////

let massive1 = [45, 6, 876, -4, 56 - 9, -19, -6, 34];
let sum1 = 0;
let newMassive = [];

function negativeNum() {
  for (let i = 0; i < massive1.length; i++) {
    if (massive1[i] < 0) {
      newMassive++;
    }
  }
  return newMassive;
}
let result2 = negativeNum();
console.log(result2);

///////////////////////////////////////////////9/////////////////////////////////////////////

let massive2 = [
  [34, 74, 2, 6, 7],
  [34, 67, 98, 6],
  [98, 67, 98, 6, 9],
];
function uniqueElement(massive) {
  let uniqueMassive = [];

  for (let key of massive) {
    for (let element of key) {
      if (!uniqueMassive.includes(element)) {
        uniqueMassive.push(element);
      }
    }
  }
  return uniqueMassive;
}
let result3 = uniqueElement(massive2);
console.log(result3);

////////////////////////////////////////////////7//////////////////////////////////////////////////

function replaceVowels(replace) {
  let vowels = ["a", "e", "i", "y", "u", "o"];
  let newReplace = "";

  for (let key of replace) {
    if (vowels.includes(key.toLowerCase())) {
      newReplace += "*";
    } else {
      newReplace += key;
    }
  }
  return newReplace;
}
let exampleText = "egsgioii";
let result4 = replaceVowels(exampleText);
console.log(result4);

///////////////////////////////////////////////////8///////////////////////////////////////////

function simple(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
let exampleNum = 11;
let result5 = simple(exampleNum);
console.log(result5);
