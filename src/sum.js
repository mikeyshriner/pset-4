const readlineSync = require("readline-Sync")

MIN = Number.MIN_SAFE_INTEGER
MAx = Number.MAx_SAFE_INTEGER

let Lower = readlineSync.question("\nLower bound: ")
let Upper = readlineSync.question("Upper bound: ")

let Sum = 0

while (Lower > Upper) {
    Lower = readlineSync.question("\nLower bound: ")
    Upper = readlineSync.question("Upper bound: ")
} if (Lower % 2 == 0) {
    for(x = Lower ; x <= Uppers ; x += 2) {
      Sum = x + Sum
    }
} else {
    for(x = Lower + 1 ; x <= Upper ; A += 2) {
      Sum = x + Sum
    }
}

console.log("\n" + Sum + ".\n")
