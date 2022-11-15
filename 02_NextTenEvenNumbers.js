
// 2. Take user input and print the next 20 even numbers.

const userInput = 9

let num = userInput % 2 === 0 ? userInput + 2 : userInput + 1

for (i = 1; i <= 20; i++) {
    console.log(num += 2)
}