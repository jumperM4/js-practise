// // // task 1
const users = [
  { name: "Alice", age: 22 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 28 },
  { name: "David", age: 15 },
  { name: "Eve", age: 20 },
];

const over18Users = (users) => users.filter(user => user.age > 18);

// const over18Users = (users) => {
//   const over18UsersArray = [];

//   users.forEach((user) => {
//     if (user.age > 18) {
//       over18UsersArray.push(user);
//     }
//   });
//   return over18UsersArray;
// };

console.log(over18Users(users));

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
