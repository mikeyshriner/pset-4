const readlineSync = require("readline-sync");

let i = 0;
let x = 1;
let y = 0;
let result = "";

console.log("");

do {
      i = Number(readlineSync.question("Positive integer: "));
} while (i <= 0 || i > Number.MAX_SAFE_INTEGER || Number.isNaN(i) || !Number.isInteger(i));

while (x <= Math.floor(Math.sqrt(i))) {

    if (x <= i) {
      y = i % x

      if (x === Math.floor(Math.sqrt(i))) {
        result = result + x + ". "
        break;
      } else if (y === 0) {
        result = result + x + ", " + (i / x) + ", "
      }
      x++
    }
}


  console.log("\n" + result);
