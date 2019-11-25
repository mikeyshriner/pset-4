const readlineSync = require("readline-Sync")

let x = 0
let space = ""

console.log()

do {
    x = Number(readlineSync.question("Positive integer: "));
} while (x < 1 || x > Number.MAX_SAFE_INTEGER || !Number.isInteger(x));

while (x > 0) {
  let value = (x % 10)
  x = Math.floor(x/10)

  if (x > 0) {
    space = space + value + ", ";
  } else {
    space = space + value + ". ";
  }
}

console.log("\n" + space);
