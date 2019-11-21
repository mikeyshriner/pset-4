const readlineSync = require("readline-Sync")

MIN = Number.MIN_SAFE_INTEGER
MAX = Number.MAX_SAFE_INTEGER

let Lower = readlineSync.question("\nLower bound: ")
let Upper = readlineSync.question("Upper bound: ")

let Sum = 0

while (Lower > Upper) {
    Lower = readlineSync.question("Lower bound: ")
    Upper = readlineSync.question("Upper bound: ")
} if (Lower%2===0) {
    for(i=Lower;i<=Upper;i+=2) {
      Sum=i+Sum
    }
} else {
    for(i = Lower++;i<= Upper;i+=2) {
      Sum=i+Sum
    }
}

var Final = Sum.toLocaleString("en")

console.log("\n" + Final + ".\n")
