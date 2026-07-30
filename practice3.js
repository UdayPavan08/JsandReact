const user = {
  id: 1,
  name: "khrndknrkdn",
  age: 23,
  address : ["city", "state", 67],
  department : {
    dep_name : "Computer Science",
    dep_id : "cs101101"
  }
};


// console.log(Object.keys(user));
// console.log(Object.entries(user));
// console.log(Object.values(user))

// for (const [key, value] of Object.entries(user)) {
//   console.log(`${key}:`,value);
// }

// for (const [key, value] of Object.entries(user)) {
//   if (typeof value === "object" && value !== null && !Array.isArray(value)) {
//     console.log(`${key}:`);
//     for (const [subKey, subValue] of Object.entries(value)) {
//       console.log(`  ${subKey}: ${subValue}`);
//     }
//   } else {
//     console.log(`${key}: ${value}`);
//   }
// }

// map2 contains 
// firstname => Ram
// lastname => Prasad
// website => geeksforgeeks 
let map2 = new Map([
    ["firstname", "Ram"],
    ["lastname", "Prasad"],
    ["website", "geeksforgeeks"]
]);

// console.log("Map2: ");
// console.log(map2);

// let map3= new Map([
//   ["firstname", "Ram"],
//   ["rollno" , 1],
//   ["ph" , 99001992020]
// ]);

// console.log(map3)

// let map3= new Map(Object.entries({
//   firstname:"Ram",
//   rollno : 34
// }));


// console.log(map3)

// const a = new Set([1, 2, 3,"one", "two", "four"]);
// const b = new Map([
//   [1, "one"],
//   [2, "two"],
//   [4, "four"],
// ]);
// console.log(a.union(b)); // Set(4) {1, 2, 3, 4}

// const obj = {
//     name : "alex"
// };

// Object.freeze(obj);

// obj.name = "john";
// console.log(obj)


const obj = {
    name : "alex"
};

Object.seal(obj);

obj.name = "john";
console.log(obj)