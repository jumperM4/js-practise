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

//20.03.2023
// // // task 1
const users = [
  { name: "Alice", age: 22 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 28 },
  { name: "David", age: 15 },
  { name: "Eve", age: 20 },
];

// const over18Users = (users) => users.filter(user => user.age > 18);

// // const over18Users = (users) => {
// //   const over18UsersArray = [];

// //   users.forEach((user) => {
// //     if (user.age > 18) {
// //       over18UsersArray.push(user);
// //     }
// //   });
// //   return over18UsersArray;
// // };

// console.log(over18Users(users));

// //task2
// const products = [
//   {
//     id: 1,
//     name: "Product 1",
//     reviews: [
//       { rating: 4 },
//       { rating: 5 },
//       { rating: 3 },
//       { rating: 5 },
//       { rating: 4 },
//     ],
//   },
//   {
//     id: 2,
//     name: "Product 2",
//     reviews: [
//       { rating: 2 },
//       { rating: 3 },
//       { rating: 4 },
//       { rating: 1 },
//       { rating: 2 },
//     ],
//   },
//   {
//     id: 3,
//     name: "Product 3",
//     reviews: [
//       { rating: 5 },
//       { rating: 5 },
//       { rating: 4 },
//       { rating: 5 },
//       { rating: 4 },
//     ],
//   },
// ];

// const productsAverageRating = (products) => {
//   const arrOfProductsWithAverageRating = [];

//   products.forEach((product) => {
//     let sum = 0;

//     product.reviews.forEach((review) => {
//       sum = sum + review.rating;
//     });

//     sum = sum / product.reviews.length;

//     arrOfProductsWithAverageRating.push({
//       id: product.id,
//       rating: sum,
//     });
//   });

//   console.log(arrOfProductsWithAverageRating);
// };

// productsAverageRating(products);

// //Task3
// const salesData = [
//   { month: "Январь", sales: 1000 },
//   { month: "Февраль", sales: 2000 },
//   { month: "Март", sales: 3000 },
//   { month: "Январь", sales: 1500 },
//   { month: "Февраль", sales: 2500 },
//   { month: "Март", sales: 3500 },
//   { month: "Январь", sales: 2000 },
//   { month: "Февраль", sales: 3000 },
//   { month: "Март", sales: 4000 },
// ];

// const findSum = (salesData) => {
//   //  const newArr = [];
//   let newObj = {};

//   salesData.forEach((dataItem) => {
//     const { month, sales } = dataItem;
//     if (newObj[month]) {
//       newObj[month] += sales;
//     } else {
//       newObj[month] = sales;
//     }
//   });

//   return Object.values(newObj);
// };

// console.log(findSum(salesData));

//Task4
// const users = [
//   { name: "John Doe", accessLevel: "admin" },
//   { name: "Jane Smith", accessLevel: "user" },
//   { name: "Bob Johnson", accessLevel: "user" },
//   { name: "Alice Brown", accessLevel: "admin" },
// ];

// const findNumberOfUsersAndAdmins = (users) => {
//   let array = [];
//   let newObj = {};

//   users.forEach((user) => {
//     array.push(user.accessLevel);
//   });

//   array.forEach((item) => {
//     if (newObj[item]) {
//       newObj[item] = newObj[item] + 1;
//     } else {
//       newObj[item] = 1;
//     }
//   });
//   return newObj;
// };

// //Task5
// const products = [
//   { name: "Product 1", price: 30 },
//   { name: "Product 2", price: 10 },
//   { name: "Product 3", price: 20 },
// ];

// const sortedObjectByPrice = (products) => {
//   return products.sort((a, b) => a.price - b.price);
// };

// console.log(sortedObjectByPrice(products));

// //Task6
// const users = [
//   { name: "John Doe", email: "johndoe@example.com" },
//   { name: "Jane Smith", email: "janesmith@example.com" },
//   { name: "Bob Johnson", email: "bobjohnson@example.com" },
//   { name: "Alice Mohnson", email: "bobjohnson@example.com" },
//   { name: "Quil Bohnson", email: "bobjohnson@example.com" },
//   { name: "Druob Oohnson", email: "bobjohnson@example.com" },
// ];

// const sortedObjectByName = (users) => {
//   const sortedUsersList = users;

//   sortedUsersList.sort((a, b) => {
//     if (a.name > b.name) {
//       return 1;
//     }
//     if (a.name < b.name) {
//       return -1;
//     }

//     return 0;
//   });

//   return sortedUsersList;
// };
// console.log(sortedObjectByName(users));

// const sortedObjectByName1 = (users) => {
//   const sortedUsersList = users;

//   sortedUsersList.sort((a, b) => a.name.localeCompare(b.name));

//   return sortedUsersList;
// };
// console.log(sortedObjectByName1(users));

// //Task7
// const products = [
//   { name: "Product 1", price: 10 },
//   { name: "Product 2", price: 20 },
//   { name: "Product 3", price: 30 },
//   { name: "Product 4", price: 40 },
// ];

// const sortedByMinMaxPrice = (min, max, products) => {
//   const sortedArrOfProducts = [];

//   products.forEach((product) => {
//     if (
//       product.hasOwnProperty("price") &&
//       product.price > min &&
//       product.price < max
//     ) {
//       sortedArrOfProducts.push(product);
//     }
//   });

//   return sortedArrOfProducts;
// };

// console.log(sortedByMinMaxPrice(11, 41, products));
