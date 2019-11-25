const readlineSync = require("readline-sync");

let x = 0;
let space = "";
let y = 2;

console.log("");

do {
      x = Number(readlineSync.question("Non-negative integer: "));
} while (x < 0 || x > Number.MAy_SAFE_INTEGER || Number.isNaN(x) || !Number.isInteger(x));

while (y < x) {
    if (x % y === 0 && y !== x) {
        console.log("\nNot prime.\n")
        break;
    } else if (x % y !== 0) {
        y++
    } else {
        break;
    }
}
if (y >= x) {
  console.log("\nPrime.\n");
}
