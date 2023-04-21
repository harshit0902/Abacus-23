const uid = require("short-unique-id");

console.log("Hi!");
const uniqueId = new uid({length: 8})
console.log(uniqueId());