// let readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// function sayHello(name) {
//     console.log(`Hello, ${name}!`);
// }

// function sayGoodbye(name) {
//     console.log(`Goodbye, ${name}!`);
// }

// let name = "Uday";

// rl.question("Are you leaving? (yes/no)", (answer) => {
//     let isLeaving = answer.toLowerCase() === "yes";
//     isLeaving ? sayGoodbye(name) : sayHello(name);
//     rl.close();
// })

// let n1, n2;
// const res = (n1=1, n2= 10, n1 + n2);
// console.log(res);

// function f1(){
//     console.log("one");
//     return "one";
// }

// function f2(){
//     console.log("two");
//     return "two";
// }

// function f3(){
//     console.log("three");
//     return "three";
// };

// let x = (f1(), f2(), f3());
// console.log(x);

// let n = 10;

// console.log(n++)
// console.log(++n)

// let a = 10;
// let b = 20;

// console.log(a+b);
// console.log(a+=b);
// console.log(a-=b);
// console.log(a*=b);
// console.log(a/=b);

// if(a>0){
//     console.log("The number is positive");
// }else{
//     console.log("The number is negative");
// }

// const readline = require("readline");

// //create an interface to take input from terminal
// const r1 = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// //Ask user for input
// r1.question("Enter a number:", (answer) => {

//     //convert string to number
//     let num = Number(answer);

//   if (num < 0) {
//     console.log("Enter a positive number");
//   } else {
//     switch (true) {
//       case num === 0:
//         console.log("Number is zero");
//         break;
//       case num != 0 && num <= 50:
//         console.log("Number is between 1-50");
//         break;
//       case num >= 51 && num < 100:
//         console.log("Number is between 51-100");
//         break;
//       default:
//         console.log("Number is 100");
//     }
//   }
//   r1.close();
// });

// let x ;
// for (let i = x^0 === 1 ; i <= 10; i++) {
//   console.log(i);
// }

// let x = 10;
// for(let i=0; i<x; i++){
//     console.log("Value of x:" + (i+1));
// }

// let num = 50;
// for(let i=1; i<num; i++){
//     let res = i%2===0 ? i :"No even numbers" ;
//     console.log(res);
// }

//find the largest number in an array
// let numArr=[1,4,7,34,8];
// let largest=numArr[0];
// for(let i=0; i<numArr.length; i++){
//     if(numArr[i]>largest){
//         largest=numArr[i];
//     }
// }
// console.log("Largest number is: " + largest);

// const str = "Hello";
// for (const char of str){
//     console.log(char);
// }

// const m = new Map([
//     ["name", "Akash"],
//     ["age", 25],
//     ["city", "Hyderabad"]
// ]);

// for (let [key, value] of m){
//     console.log(`${key}: ${value}`);
// }

// const name = "Uday";

// for (const char of name){
//     console.log(char);
// }

// const fruits = ['apple','banana','mango'];
// for (const index in fruits){
//     console.log(index + ':' + fruits[index]);
// }

//  const colors = ["red", "green", "blue", "yellow"];
//  for (let result of colors){
//     console.log(result);
//  }

// const car = { brand: "Toyota", model: "Camry", year: 2022 };

// for (const key in car){
//     console.log(key + ':' + car[key]);
// }

// const word = "Hyderabad";
// count = 0
// for (const char of word){
//     count++;
// }

// const nums = [10, 20, 30, 40, 50];
// let res=0;
// for (const num of nums){
//       res+=num;
// }
// console.log(res);

// const profile = { name: "Arjun", age: 25, city: "Hyderabad", score: 99 };
// for (let key in profile){
//     if (typeof(profile[key]) === "number"){
//          console.log(key);
//     }
// }

// const sentence = "Hello World";
// for (let vowels of sentence){
//     if(["a", "e", "i", "o", "u"].includes(vowels)){
//         console.log(vowels);
//     }
// }

// let firstName = null;
// let lastName = null;
// let nickName = "Supercoder";

//  shows the first truthy value:
// console.log(firstName || lastName || nickName || "Anonymous"); // Supercoder

// let height = 0;
// console.log(height || 100);
// console.log(height ?? 100);

// function count (){
//     console.log(this.length);
// }

// let a = [];
// console.log(a);

// let b = [10, 20, 40];
// console.log(b);

// let c = [];
// const { stdin } = require("process");
// c.push("Nodejs");
// c.unshift("React");

// console.log(c);

// console.log(typeof(c.pop()));

// console.log(c)

// let a = [1, 2, 3, 4, 5];

// let res = a.forEach(item => {
//     console.log(item);
// });

// for (let i=0; i<a.length; i++){
//     let res=a[i];
//     console.log(res);
// }

// for (let res of a){
//     console.log(res);
// }

// let res = a.shift();
// console.log(a);

// let reversed = [];

// for (let item of a){
//     reversed.unshift(item)
// }
// console.log(reversed);

//

// let a = [1, 2, 2, 3, 4, 4, 5];
// // expected output: [1, 2, 3, 4, 5]

// let result=[];

// for (let item of a ){
//     if(!result.includes(item)){
//         result.push(item)
//     }
// }

// console.log(result)

// let a = [3, 1, 5];
// let b = [8, 2, 4];

// // expected output: [1, 2, 3, 4, 5, 8]

// let merged = [...a, ...b];

// console.log(merged.sort((a,b) => (a - b)));

// let a = 2+2;

// switch(a){
//     case 3:
//         console.log('Too small');
//         break;
//     case 4:
//         console.log('Exactly');
//         break;
//     case 5:
//         console.log('too big');
//         break;
//     default:
//         console.log("i don't know such values");
// }

// let a = "1";
// let b = 0;

// switch (+a) {
//   case b + 1:
//     console.log("this runs, because +a is 1, exactly equals b+1");
//     break;

//   default:
//     console.log("this doesn't run");
// }

// const readline = require("readline");

// const r1 = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// r1.question("Enter a Month:", (answer) => {
//   let month = Number(answer);

//   switch(str){
//       case "summer":
//           console.log("Wear cotton clothes");
//           break;
//       case "winter":
//           console.log("Wear woolen clothes");
//           break;
//       case "rainy":
//           console.log("Wear water proof clothes");
//           break;
//       default:
//           console.log("Enter a valid season");
//   }

//   switch (month) {
//     case 1:
//     case 3:
//     case 5:
//       console.log("31 days");
//       break;
//     case 2:
//       console.log("28 days");
//       break;
//     case 4:
//     case 6:
//       console.log("30 days");
//       break;
//     default:
//       console.log("Invalid month");
//   }
//   r1.close();
// });

// const readline = require("readline");

// const r1 = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// function showMessage(name) {
//     return `Hello ${name}`;
// }

// r1.question("Enter Your name: ", (answer) => {
//     console.log(showMessage(answer)); // just pass answer directly
//     r1.close();
// });

// let name = "Uday";

// function showName(){
//     let message = `Welcome ${name}`;
//     return message;
// }

// console.log(showName());

// let userName = "John";

// function showMessage(){
//     let userName="Bob";

//     let message = `You are ${userName}`
//     return message;
// }

// console.log(userName);

// showMessage();

// console.log(showMessage());

// let userName = 'John';

// function showMessage() {
//   let userName = "Bob"; // declare a local variable

//   let message = 'Hello, ' + userName; // Bob
//   console.log(message);
// }

// // the function will create and use its own userName
// showMessage();

// console.log(userName);

// let a = "global";

// function scopes() {
//     let a = "local";
//     console.log(a);
//     if(true){
//         let a = "block";
//         console.log(a);
//     }
// }
// scopes()

// function greet() {
//     return "Hello";
//     console.log("World"); // what happens here?
// }
// console.log(greet());

// function greet(name) {
//     return `Hello ${name}`;
// }

// console.log(greet("Uday")); // Hello Uday
// console.log(greet());       // Hello undefined

// function greet(name = "stranger"){
//     return `Hello ${name}`;
// }

// console.log(greet("Pavan"));
// console.log(greet());

// function createUser(name="Guest", age=20, city="Hyd"){
//     return `${name} is ${age} years old lives in ${city}`;
// }

// console.log(createUser());
// console.log(createUser(undefined, 23, "Chennai"));

// function showMessage(from, text) { // parameters: from, text
//   console.log(from + ': ' + text);
// }

// showMessage('Ann', 'Hello!'); // Ann: Hello! (*)
// showMessage('Ann', "What's up?"); // Ann: What's up? (**)

// function add(...numbers){
//   return numbers.reduce((sum,num) => sum + num, 0);
// }

// console.log(add(2,3));
// console.log(add(23,35,78));

// function greet(greeting, ...names){
//   return names.map(name => `${greeting} ${name}`);
// }

// console.log(greet("Hello", "Uday", "John", "Bob"));

//calculating age based on birth year
// const readlineSync = require('readline-sync');
// const birthYear = parseInt(readlineSync.question("Enter birth year: "));
// const age = new Date().getFullYear() - birthYear;
// console.log("Age:", age);

//  create a simple calculator that can perform addition, subtraction, multiplication, and division based on user input. Can you help me with that?

const readlineSync = require("readline-sync");

// function calculator() {
//     const num1 = parseFloat(readlineSync.question("Enter the first number: "));
//     const num2 = parseFloat(readlineSync.question("Enter the second number: "));
//     const operator = readlineSync.question("Enter an operator (+, -, *, /): ");

//     // Validate input
//     if (isNaN(num1) || isNaN(num2)) {
//         console.log("Invalid input. Please enter valid numbers.");
//         return;
//     }
//     // Perform calculation based on operator
//     else {
//         let result;

//         // Use a switch statement to handle different operators
//         switch (operator) {
//             case '+':
//                 result = num1 + num2;
//                 break;
//             case '-':
//                 result = num1 - num2;
//                 break;
//             case '*':
//                 result = num1 * num2;
//                 break;
//             case '/':
//                 if (num2 === 0) {
//                     console.log("Error: Division by zero is not allowed.");
//                     return;
//                 }
//                 result = num1 / num2;
//                 break;

//                 // Handle invalid operator input
//             default:
//                 console.log("Invalid operator. Please enter +, -, *, or /.");
//                 return;
//         }
//         console.log("Result:", result);
//     }
// }

// // Call the calculator function to run the program
// calculator();

//reverse a string using built-in methods
// function reverseString(str) {
//     return str.split('').reverse().join('');
// }

// console.log(reverseString("Hello World")); // Output: "dlroW olleH"

//reverse a string using a loop
// function reverseStringloop(str) {
//     let reversed = '';
//     for (let i=str.length - 1; i>=0; i--){
//       reversed = reversed + str[i];
//     }
//     return reversed;
// }

// //take input from user and reverse the string
// let input = readlineSync.question("Enter a string: ");
// console.log(reverseStringloop(input));

// //test the function with a sample string
// console.log(reverseStringloop("Hello World"));

//Voting Eligibility Checker

// function checkVotingEligibility(age) {
//   if(age <= 0){
//     console.log("Please enter a which is greater than zero")
//   }
//    else if (age >= 18){
//       console.log("You are Eligible for vote ");
//     }
//     else{
//       console.log("You are not eligible for vote");
//     }
//   }

// const age = parseInt(readlineSync.question("Enter Your Age: "));
//   checkVotingEligibility(age);

//same program using ternary operator
//   function checkVotingEligibility(age) {
//     const message = age >= 18 ? "You are Eligible for vote" : "You are not eligible for vote";
//     console.log(message);
//   }

//   let age;

// do {
//   age = parseInt(readlineSync.question("Enter Your Age: "));

//   if (age <= 0) {
//     console.log("Please enter an age which is greater than zero");
//   }
// } while (age <= 0); //  keeps looping until a valid age is entered

// checkVotingEligibility(age)

//print 1-100 using loops

// function printNumbers() {
//   for (let i=1; i<=100; i++){
//     console.log(i);
//   }
// }
// printNumbers();

//print even numbers from 1-100
// function evenNumbers(num) {
//   for (let i = 1; i <= num; i++) {
//     if (i % 2 === 0) {
//       console.log(i);
//     }
//   }
// }

// let num;
// do {
//   num = parseInt(readlineSync.question("Enter a number: "));
//   if (isNaN(num) || num <= 0) {
//     console.log("Enter a valid number");
//   }
// } while (isNaN(num) || num <= 0);

// evenNumbers(num);

//Multiplication Table Generator
// function multiplicationTable(num) {
//   for (let i=1; i<= 10; i++){
//     if(isNaN(num) || num <= 0){
//       console.log("Enter a valid number");
//       return;
//     }
//     else{
//       console.log(`${num} x ${i} = ${num * i}`);
//     }
//   }
// }
// let num1;
// do {
//   num1 = parseInt(readlineSync.question("Enter a number: "));
//   if (isNaN(num1) || num1 <= 0) {
//     console.log("Enter a valid number");
//   }
// } while (isNaN(num1) || num1 <= 0);
// multiplicationTable(num1);

//grade calculator using switch statement
// function gradeChecker(score) {
//   if (isNaN(score) || score < 0 || score > 100) {
//     console.log("Enter a valid score between 0 and 100");
//     return;
//   }

//   switch (true) {
//     case score >= 90:
//       console.log("Grade: A");
//       break;

//     case score >= 80:
//       console.log("Grade: B");
//       break;

//     case score >= 70:
//       console.log("Grade: C");
//       break;

//     case score >= 60:
//       console.log("Grade: D");
//       break;

//     case score >= 30:
//       console.log("Grade: E");
//       break;

//     default:
//       console.log("Grade: F");
//   }
// }

// const score = parseInt(readlineSync.question("Enter Your Score: "));
// gradeChecker(score);


// remove duplicates from a string

// function removeDuplicates(str) {
//   let result = "";
//   for (let i of str) {
//     if (!result.includes(i)) {
//       result += i;
//     }
//   }
//   console.log(result);
// }

// const str = readlineSync.question("Enter a string: ");
// removeDuplicates(str);


// function testing(a,b,c){
//   return a+b+c;
// }

// let result = testing(1,2);
// let res = testing(1,2,4);
// console.log(result);
// console.log(res);

// function sayHello(){return "Hello"};

// let greeting = sayHello();
// console.log(greeting);

// function myFunction() {
//   var carName = "Volvo";
//    let veh = carName;
//    var carName = "BMW";
//   console.log(veh);
//   return carName;
 
// }

// let vehicle = myFunction();
// console.log(vehicle);


//Functions used as Variables

// let temp = "The temperature is " + toCelsius(77) + " degrees Celsius.";
// console.log(temp);

// function toCelsius(fahrenheit) {
//   return (5 / 9) * (fahrenheit - 32);
// }

//Area calculator using function

// function calculateArea(length, width) {
//   return length * width;
// }

// let length = parseFloat(readlineSync.question("Enter the length: "));
// let width = parseFloat(readlineSync.question("Enter the width: "));

// let area = calculateArea(length, width);
// console.log(`The area of the rectangle is: ${area}`);


//function to know number is even or not

// const readline = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// readline.question("Enter a number: ", (input) => {
//   let num = Number(input);
//   console.log(isEven(num) ? "true" : "false");
//   readline.close();
// });

// function isEven(num) {
//   return num % 2 === 0;
// }


// function debounce(func, delay) {
//   let timerId;
//   return function (...args) {
//     clearTimeout(timerId);
//     timerId = setTimeout(() => func(...args), delay);
//   };
// }

// const search = debounce((query) => console.log("Searching for:", query), 5000);

// search("c");
// search("ca");
// search("cat");

// function debounce1(func, delay){
//   let timeouts;

//   return function (...args){
//     clearTimeout(timeouts);
//     timeouts = setTimeout (() => func(...args), delay);
//   };
// }

// const show = debounce1((query) => console.log("search for:", query), 900);
// show("ca");
// show("bat");
// show("Apple");


// the wrong way
// function debounce(func, wait) {
//   let timeout
//   return (...args) => {
//     clearTimeout(timeout)
//     timeout = setTimeout(() => func(...args), wait)
//   }
// }


// function sayHello(x) {
//   console.log(x)
// }

// const debounce2 = debounce(sayHello, 100)
// debounce2(1)
// debounce2(2)
// debounce2(3)
// setTimeout(() => debounce2(4), 200)


//Throttling

// function throttle(func, limit) {
//   let inThrottle = false;

//   return (...args) => {
//     if(!inThrottle){
//       func(...args);
//       inThrottle=true;

//       setTimeout(() => {
//         inThrottle = false;
//       }, limit)
//     }
//   };
// }


// function throttle(func, limit) {
//   let inThrottle = false;
//   return (...args) => {
//     if (!inThrottle) {
//       func(...args);
//       inThrottle = true;
//       setTimeout(() => (inThrottle = false), limit);
//     }
//   };
// }

// const log = throttle((msg) => console.log(msg, Date.now()), 1300);


// setTimeout(() => log("call 1"), 0);
// setTimeout(() => log("call 2"), 200);
// setTimeout(() => log("call 3"), 500);
// setTimeout(() => log("call 4"), 2200);

// function lateExecute(func, delay) {
//   let timerFlag = null;

//   return (...args) => {
//     if (timerFlag === null) {
//       func(...args);
//       timerFlag = setTimeout(() => {
//         timerFlag = null;
//       },delay);
//     }
//   };
// }

// const executed = lateExecute((query) => console.log(query), 900);

// executed("Hel");
// executed("Hello");


// function greet(name) {
//   return `Hello ${name}`;

// }
// console.log(greet("Uday"));
// const greet = (name) => `Hello,${name}`;


// let arr = [1,2,3,4];

// let res = arr.map(item => item*2);

// console.log(res)

// setTimeout(() => {
//     console.log("Function executed");
// }, 1000);


 
// (function () {
//   let message = "Hello";
//   console.log("This runs immediately!");
// });

// console.log(message);

// function counter() {
//     let count = 0;

//     return function () {
//         count++;
//         return count;
//     };
// }

// const increment = counter();

// console.log(increment()); // 1
// console.log(increment()); // 2
// console.log(increment()); // 3



// function outer() {
//     let count = 0;

//     return function () {
//         count++;
//         console.log(count);
//     };
// }

// const c1 = outer();

// c1();
// c1();
// c1();

// const arr1=[1,2,3]

// console.log(arr1.map());


// const user ={
//   name:"Uday",
//   age : 20,
//   "most liked movie": "mcu"
// }

// let res= user.most liked movie;
// console.log(res);


// const property = "Firstname";
// const name = "uday";

// const user = `First name, $[name]`;

// const obj1 = {
//   property:
// }

const property = "Name"
const name = "uday"

const user = {
  [property] : name
};

// let key = "Firstname";

// user[key] = ;

// console.log(user);

// const user1 = {};

// let key = "Name";
// user1[key] = "uday";

// console.log(user1);

// function user1 (){
//   return function user2 (){
//     console.log("Uday");
//   }
// }

// user1.map(user1);

// console.log(user1);


// function add (a,b,c){
//   console.log("a=", a);
//   console.log("b=", b);
//   console.log("c=", c);
//   return a+b+c;
// }

//   const arras = (1,2,3);
//   const res2 = add(2,4);
//   const res= arras.map(add);

//   console.log(res);


  // const arr = [1,2,3];
  // const str = "1,2,3";
  // console.log(str == arr);
  // console.log(typeof arr);
  // console.log(typeof str);

  // function add2 (a,b){
  //   return a+b;
  // }
  // const arr = ["uday", "frontend"]
  // console.log(arr.map(add2));

  const arr = [1,2,3,4];

  // const arr1 = arr.reverse();

  // console.log(arr1)

  // arr[arr.length] = "Welcome"

  //   arr.push("Nextjs");

  //   // console.log(arr);

  //   let a = arr.toString();
  //   console.log(a);
  //   console.log(arr.join('|'))

  // console.log(Object.keys(arr));
  // console.log(Object.values(arr));

  // console.log(typeof []);

  const ar = [5, 6, 7, 8];

 console.log(typeof [...arr, ...ar]);

  // console.log(typeof res)

  // console.log(res)