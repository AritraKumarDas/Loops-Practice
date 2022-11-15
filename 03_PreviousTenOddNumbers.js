

// 3. Take user input and print previous 10 odd numbers.

const userInput = 35

let num = userInput % 2 === 0 ? userInput - 1 : userInput - 2

for (i = 1; i <= 10; i++) {
    console.log(num)
    num -= 2
}