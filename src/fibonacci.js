const readlineSync = require("readline-Sync")

let f1 = 0;
let i2 = 1;
let answer = 0;

let number = readlineSync.question("\nPositive integer: ")

while (number < 1 || number > 78 || number % 1 != 0) {
    number = readlineSync.question("Positive integer: ");
}

for (let i = 1; i < number; i++) {
  answer = f1 + i2;
  f1 = i2;
  i2 = answer;
}

console.log("\n" + answer.toLocaleString("en") + ".")

// use let or const, not var
// variables should begin with lowercase letters
