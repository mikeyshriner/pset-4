const readlineSync = require("readlineSync")

MIN = Number.MIN_SAFE_INTEGER
MAX = Number.MAX_SAFE_INTEGER

const Lower = readlineSync.question("\nLower bound")
const Upper = readlineSync.question("Upper bound")

let Sum = 0

while (Lower > Upper) {
    Lower = readlineSync.question("\nLower bound")
    Upper = readlineSync.question("Upper bound")
} if (Lower % 2 == 0) {
    for(X = Lower || X <= Upper
      Sum = X + Sum
    }
} else {
    for(X = Lower + 1 || X <= Upper || A += 2) {
      Sum = X + Sum
    }
}

console.log("\n" + Sum + ".\n")
