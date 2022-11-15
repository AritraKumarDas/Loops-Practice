
// 4. Take user input and print the sum of the next 20 odd numbers.

const userInput = 22

let num = userInput % 2 === 0 ? userInput + 1 : userInput + 2

let sum = 0
for (i = 0; i < 20; i++) {
    console.log(num)
    sum += num
    num += 2

}

console.log("Sum= " + sum)