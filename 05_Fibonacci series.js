
// 5. Fibonacci series up to 'n'

let x = 0
let y = 1
let next = 0

const num = 745                  // input to be taken from keyboard

console.log("Number entered: " + num)

while (next <= num) {
    console.log(next)
    console.log("------------------")
    x = y
    y = next
    next = x + y
}


