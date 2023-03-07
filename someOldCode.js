// let checkDriverAge = function (userAge) {
// let userAge = prompt("What is your age?");

//   if (Number(userAge) === 18) {
//     alert("Congratulations on your first year of driving. Enjoy the ride!");
//   } else if (Number(userAge) > 18) {
//     alert("Powering On. Enjoy the ride!");
//   } else {
//     alert("Sorry, you are too young to drive this car. Powering off");
//   }
// };

// checkDriverAge(20);

// let array = ["Banana", "Apples", "Oranges", "Blueberries"];

// array.shift();
// console.log(array);
// console.log(array.sort());
// console.log(array.push('Kiwi'));
// console.log(array);
// array.shift();
// console.log(array);
// console.log(array.reverse())

// var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// console.log(array2[1][1][0]);

// let database = [
//   {
//     username: "Ann",
//     password: "12",
//   },
//   {
//     username: "Bill",
//     password: "123",
//   },
//   {
//     username: "Celly",
//     password: "1234",
//   },
// ];

// let newsfeed = [
//   {
//     username: "Ann",
//     timeline: "123",
//   },
//   {
//     username: "Bob",
//     timeline: "456",
//   },
//   {
//     username: "Cell",
//     timeline: "789",
//   },
// ];

// function isUserValid(user, password) {
//   let trueBalue = database.forEach((userItem) => {
//     if (userItem.username === user && userItem.password === password) {
//       return true;
//     }
//   });
//   return false;
// }

// // function isUserValid(user, password) {
// //   for (let i = 0; i < database.length; i++) {
// //     if (database[i].username === user && database[i].password === password) {
// //       return true;
// //     }
// //   }
// //   return false;
// // }

// function signIn(user, pass) {
//   if (isUserValid(user, pass)) {
//     console.log(newsfeed);
//   } else {
//     alert("Wrong info!");
//   }
// }

// let usernamePrompt = prompt("Your name?");
// let userPasswordPromt = prompt("Your Password?");

// signIn(usernamePrompt, userPasswordPromt);
