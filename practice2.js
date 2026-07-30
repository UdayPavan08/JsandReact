const orders = [
  {
    orderId: 101,
    customer: "Rahul",
    products: [
      {
        id: 1,
        name: "Mouse",
        price: 25,
      },
      {
        id: 2,
        name: "Keyboard",
        price: 80,
      },
    ],
  },
  {
    orderId: 102,
    customer: "Priya",
    products: [
      {
        id: 3,
        name: "Monitor",
        price: 250,
      },
      {
        id: 4,
        name: "USB Cable",
        price: 15,
      },
    ],
  },
  {
    orderId: 103,
    customer: "Rahul",
    products: [
      {
        id: 1,
        name: "Pendrive",
        price: 55,
      },
      {
        id: 2,
        name: "charger",
        price: 230,
      },
    ],
  },
];

// const productNames = orders.map(orders => (
//     orders.products.map(product => product.name))
// ).flat();
// console.log(productNames)

// const itemNames = orders.flatMap(orders =>
//     // orderId: orders.orderId,
//     orders.products.map(product => ({
//     orderId: orders.orderId,
//     customer: orders.customer,
//     productId: product.id,
//     product: product.name,
//     price: product.price
//   }))

//     // customer : orders.customer,
//     // productId : orders.products.map(products => products.id),
//     // product :orders.products.map(products => products.name),
//     // price: orders.products.map(products => products.price)

// );
// console.log(itemNames)

// Expected: [{orderId:101, customer:"Rahul", total:105}, {orderId:102, customer:"Priya", total:265}, {orderId:103, customer:"Rahul", total:285}]

// const totalPrice = orders.map((orders) => ({
//   orderId: orders.orderId,
//   customer: orders.customer,
//   total: orders.products.reduce((acc, product) => acc + product.price, 0)
// }));

// console.log(totalPrice);

// let total = 0;
// orders
//   .flatMap((order) => order.products.map((product) => product.price))
//   .map((price) => {
//     total += price;
//     return price;
//   });
// console.log(total);

// const totalPriceOfProducts = orders.map((order) => {
//   let total = 0;
//   // orderId:order.orderId,
//   // customer:order.customer,
//   productTotal: order.products.map((product) => {
//     total += product.price;
//   });
//   return { orderId: order.orderId, customer: order.customer, total: total };
// });
// console.log(totalPriceOfProducts);

//-------filter()---//

const student = [
  {
    id: 1,
    name: "suresh",
    subject : [{
    maths_marks: 67,
    science_marks : 57,
    }]
  },
  {
    id: 2,
    name: "Ramesh",
    subject : [{
    maths_marks: 67,
    science_marks : 57,
    }]
  },
  {
    id: 3,
    name: "giri",
    subject :[{
    maths_marks: 67,
    science_marks : 57,
    }]
  },
  {
    id: 4,
    name: "gopi",
    subject : [{
    maths_marks: 67,
    science_marks : 57,
    }]
  },
  {
    id: 5,
    name: "Venkat",
    subject : [{
    maths_marks: 67,
    science_marks : 57,
    }]
  },
];


// const marks = student.filter(student => student.maths_marks >= 60).map(student => student.name);
// const highestMarks = Math.max(...student.map(std => std.maths_marks));
// const topper = student.filter(std => std.maths_marks === highestMarks)
// console.log(topper);
// // console.log(marks);


const thirdPerson = student[2];
const result = thirdPerson.subject.reduce((sum,subject) => sum + subject.maths_marks + subject.science_marks, 0);
console.log(result)

// const thirdPerson = student.map()

// Polyfill must come FIRST
Array.prototype.myMap = function (callback) {
    let result = [];

    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    }

    return result;
};

// Then use it
const numbers = [1, 2, 3];

const doubled = numbers.myMap(num => num * 2);

console.log(doubled);