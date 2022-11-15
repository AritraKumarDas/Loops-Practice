
// 6. Check if a string is palindrome

const str = "malayalam"         // Take input from keyboard

console.log("Input String: " + str)

const length = str.length;
const mid = length / 2;

let palindrome = true;

for (let i = 0; i < mid; i++) {
    if (str.charAt(i) !== str.charAt(length - 1 - i)) {
        palindrome = false;
    }

}

if (palindrome) {
    console.log(str + " is a palindrome")
} else {
    console.log(str + " is not a palindrome")
}