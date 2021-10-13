// Global scope

let age = 28;
let name = "Jon snow";
let arrayOfNames = ["Tyron Lannister", "Jamie Lannister"];
arrayOfNames.push("Jon snow");
arrayOfNames.push("Arya Stark");
arrayOfNames.push("Sansa Stark");

// arrayOfNames.forEach((item) => {
//   console.log(item);
// });

// for (let value in arrayOfNames) {
//   console.log(value);
// }

// for (let value of arrayOfNames) {
//   console.log(value);
// }

// for (let index = 0; index < arrayOfNames.length; index++) {
//   console.log(arrayOfNames[index]);
// }

let car = {
  engine: "v8",
  color: "red",
};

function print2() {
  console.log(age + 2);
  console.log(car.engine);
}

function print() {
  let key = "keys";
  return function () {
    console.log(key);
  };
}

const print3 = () => {
  console.log("this is an arrow function");
};

// Call stack or the invokation stack
// print();
// print2();

// let newFunction = print();
// newFunction();
// print3();
