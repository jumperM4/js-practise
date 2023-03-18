// // let checkDriverAge = function (userAge) {
// // let userAge = prompt("What is your age?");

// //   if (Number(userAge) === 18) {
// //     alert("Congratulations on your first year of driving. Enjoy the ride!");
// //   } else if (Number(userAge) > 18) {
// //     alert("Powering On. Enjoy the ride!");
// //   } else {
// //     alert("Sorry, you are too young to drive this car. Powering off");
// //   }
// // };

// // checkDriverAge(20);

// // let array = ["Banana", "Apples", "Oranges", "Blueberries"];

// // array.shift();
// // console.log(array);
// // console.log(array.sort());
// // console.log(array.push('Kiwi'));
// // console.log(array);
// // array.shift();
// // console.log(array);
// // console.log(array.reverse())

// // var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// // console.log(array2[1][1][0]);

// // let database = [
// //   {
// //     username: "Ann",
// //     password: "12",
// //   },
// //   {
// //     username: "Bill",
// //     password: "123",
// //   },
// //   {
// //     username: "Celly",
// //     password: "1234",
// //   },
// // ];

// // let newsfeed = [
// //   {
// //     username: "Ann",
// //     timeline: "123",
// //   },
// //   {
// //     username: "Bob",
// //     timeline: "456",
// //   },
// //   {
// //     username: "Cell",
// //     timeline: "789",
// //   },
// // ];

// // function isUserValid(user, password) {
// //   let trueBalue = database.forEach((userItem) => {
// //     if (userItem.username === user && userItem.password === password) {
// //       return true;
// //     }
// //   });
// //   return false;
// // }

// // // function isUserValid(user, password) {
// // //   for (let i = 0; i < database.length; i++) {
// // //     if (database[i].username === user && database[i].password === password) {
// // //       return true;
// // //     }
// // //   }
// // //   return false;
// // // }

// // function signIn(user, pass) {
// //   if (isUserValid(user, pass)) {
// //     console.log(newsfeed);
// //   } else {
// //     alert("Wrong info!");
// //   }
// // }

// // let usernamePrompt = prompt("Your name?");
// // let userPasswordPromt = prompt("Your Password?");

// // signIn(usernamePrompt, userPasswordPromt);

// //Task 1
// let isEven = (num) => {
//   if (num % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// };

// // Task 2
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

// //Task 3
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

// //Task 4
// let findSum = (num) => {
//   let sum = 0;

//   for (let i = 1; i <= num; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//       sum = sum + i;
//     }
//   }
//   return sum;
// };

// //Task 5
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
//   let sum = 0;
//   for (let i = 2; i <= num; i++) {
//     if (isPrime(i)) {
//       sum = sum + i;
//     }
//   }
//   return sum;
// };

// console.log(getPrimes(10));

// Количество админов и юзеров
// Напиши пж функцию, которая принимает массив объектов пользователей и возвращает объект, содержащий количество пользователей с каждым уровнем доступа

// const users = [
//   { name: 'John Doe', accessLevel: 'admin' },
//   { name: 'Jane Smith', accessLevel: 'user' },
//   { name: 'Bob Johnson', accessLevel: 'user' },
//   { name: 'Alice Brown', accessLevel: 'admin' }
// ];

// Сортировка по цене
// Напиши пж функцию, которая принимает массив объектов товаров и возвращает новый массив объектов товаров, отсортированный по возрастанию цены
// javascript

// const products = [
//   { name: 'Product 1', price: 30 },
//   { name: 'Product 2', price: 10 },
//   { name: 'Product 3', price: 20 }
// ];

// Сортировка по алфавиту
// Напиши пж функцию, которая принимает массив объектов пользователей и возвращает новый массив объектов пользователей, отсортированный по имени в алфавитном порядке

// const users = [
//   { name: 'John Doe', email: 'johndoe@example.com' },
//   { name: 'Jane Smith', email: 'janesmith@example.com' },
//   { name: 'Bob Johnson', email: 'bobjohnson@example.com' }
// ];

// Фильтр
// Напиши пж функцию, которая принимает массив объектов товаров и возвращает новый массив объектов товаров, у которых цена находится в диапазоне от minPrice до maxPrice

// const products = [
//   { name: 'Product 1', price: 10 },
//   { name: 'Product 2', price: 20 },
//   { name: 'Product 3', price: 30 },
//   { name: 'Product 4', price: 40 }
// ];