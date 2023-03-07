//Task 1
// let isEven = (num) => {
//   if (num % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// };

// Task 2
// let num = 100;
// let searching = (num) => {
//   for (let i = 1; i <= num; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("Fizz");
//     } else if (i % 5 === 0) {
//       console.log("Buzz");
//     } else if (i % 3 === 0) {
//       console.log("FizzBuzz");
//     } else {
//       console.log(i);
//     }
//   }
// };

//Task 3
// let num = 100;
// let isPrime = (num) => {
//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return num > 1;
// };

// let getPrimes = (num) => {
//   for (let i = 2; i <= num; i++) {
//     if (isPrime(i)) {
//       console.log(i);
//     }
//   }
// };

//Task 4
// let findSum = (num) => {
//   let sum = 0;

//   for (let i = 1; i <= num; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//       sum = sum + i;
//     }
//   }
//   return sum;
// };

//Task 5
let num = 100;
let isPrime = (num) => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};

let getPrimes = (num) => {
  let sum = 0;
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      sum = sum + i;
    }
  }
  return sum;
};

console.log(getPrimes(10));
