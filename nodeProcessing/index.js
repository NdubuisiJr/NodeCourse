console.log("This is correct");

console.log("index 1");
console.log("index 2");
console.log("index 3");
console.log("index 4");

const anotherFunction = () => {
  console.log("index 12");
  console.log("index 13");
  console.log("index 14");
  console.log("index 15");
};

setTimeout(anotherFunction, 5000);

console.log("NOde is doing something else here");
