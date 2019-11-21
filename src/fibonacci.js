const readlineSync = require("readline-Sync")

const MIN = 1
const MAX = Number.MAX_SAFE_INTEGER

Integer = readlineSync.question("\nPositive Integer: ")

while (0 > Integer) && !(Number.isInteger(Integer)) {
    Number = readlineSync.question("Positive: ")
}

function fib(n){
  let arr = [0, 1];
  for (let i = 2; i < n + 1; i++){
    arr.push(arr[i - 2] + arr[i -1])
  }
 return arr[n]
}

console.log("\n" + arr + ".\n")
