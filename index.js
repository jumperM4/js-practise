// // task 1
const users = [
  { name: "Alice", age: 22 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 28 },
  { name: "David", age: 15 },
  { name: "Eve", age: 20 },
];

const over18Users = (users) => {
  const over18UsersArray = [];

  users.forEach((user) => {
    if (user.age > 18) {
      over18UsersArray.push(user);
    }
  });
  return over18UsersArray;
};

console.log(over18Users(users));

//task2
const products = [
  {
    id: 1,
    name: "Product 1",
    reviews: [
      { rating: 4 },
      { rating: 5 },
      { rating: 3 },
      { rating: 5 },
      { rating: 4 },
    ],
  },
  {
    id: 2,
    name: "Product 2",
    reviews: [
      { rating: 2 },
      { rating: 3 },
      { rating: 4 },
      { rating: 1 },
      { rating: 2 },
    ],
  },
  {
    id: 3,
    name: "Product 3",
    reviews: [
      { rating: 5 },
      { rating: 5 },
      { rating: 4 },
      { rating: 5 },
      { rating: 4 },
    ],
  },
];

const averageRating = (products) => {
  const newArr = [];

  products.forEach((product) => {
    let sum = 0;

    product.reviews.forEach((review) => {
      sum = sum + review.rating;
    });

    sum = sum / product.reviews.length;

    newArr.push({
      id: product.id,
      rating: sum,
    });
  });

  console.log(newArr);
};

averageRating(products);

//Task3
const salesData = [
  { month: "Январь", sales: 1000 },
  { month: "Февраль", sales: 2000 },
  { month: "Март", sales: 3000 },
  { month: "Январь", sales: 1500 },
  { month: "Февраль", sales: 2500 },
  { month: "Март", sales: 3500 },
  { month: "Январь", sales: 2000 },
  { month: "Февраль", sales: 3000 },
  { month: "Март", sales: 4000 },
];

const findSum = (salesData) => {
  //  const newArr = [];
  let newObj = {};

  salesData.forEach((dataItem) => {
    const { month, sales } = dataItem;
    if (newObj[month]) {
      newObj[month] += sales;
    } else {
      newObj[month] = sales;
    }
  });

  return Object.values(newObj);
};

console.log(findSum(salesData));
