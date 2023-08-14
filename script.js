let checkCollege = students.every((student) => student.dept === "CSE");
console.log(checkCollege);

let fruits = ["Apple", "Orange", "Mango"];
//             [0]        [1]       [2]
console.log(fruits);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[0]);
console.log(fruits.length);
let mixArray = [
  "John",
  25,
  true,
  { name: "Jack", city: "Chennai" },
  ["cricket", "football"],
  function () {
    console.log("MixArray");
  },
];
console.log(mixArray);
console.log(mixArray[3].name);
console.log(mixArray[4][1]);
mixArray[5]();

let subjects = ["English", "Maths", "Physics"];
console.log(subjects);
console.log(subjects.shift());
console.log(subjects);
