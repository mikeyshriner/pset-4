const readlineSync = require("readline-Sync")

let x = 0
let space = ""
let sum = 0

console.log()

do {
    x = Number(readlineSync.question("Positive integer: "));
} while (x < 1 || x > Number.MAX_SAFE_INTEGER || !Number.isInteger(x));

while (x > 0) {
  let value = (x % 10)
  x = Math.floor(x/10)

  if (value % 2 === 1) {
    sum = sum + value;
  } else if (value % 2 === 0){
    continue;
  } else {
    continue;
  }

}

console.log("\n" + sum + ".\n");
