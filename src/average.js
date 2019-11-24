const readlineSync = require("readline-sync")

console.log()

let add = 0
let count = 0

MIN = 0
MAX = Number.MAX_SAFE_INTEGER

let x = 1

while (x >= 0 || count <= 1) {
    x = Number(readlineSync.question("Non-negative integer: "))
    count = count + 1
  if (x > 0 && x <= Number.MAX_SAFE_INTEGER) {
    add = add + x;
  } else if (count > 1 && x < 0) {
    let average = (add) / (count - 1)
    console.log("\n" + Intl.NumberFormat("en", {style: 'decimal', maximumFractionDigits:3, minimumFractionDigits:3}).format(average) + ".\n")
  } else {
    --count;
  }
}
