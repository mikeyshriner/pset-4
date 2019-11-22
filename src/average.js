const readlineSync = require("readline-sync")

let add = 0
let count = 0

MIN = 0
MAX = Number.MAX_SAFE_INTEGER

let x = 1

while (x >= 0) {
    x = Number(readlineSync.question("Non-negative integer: "))
    add = add + x
    count = count++
  if (x > 0 && x <= Number.MAX_SAFE_INTEGER) {
    add = add + x;
  } else if (count > 1 && x < 0) {
    let average = (add) / (count)
    console.log("\n" + average.toLocaleString("en", {style: 'decimal', maximumFractionDigits:3, minimumFractionDigits:3}).format(answer) + ".")
  } else {
    --count;
  }
}
