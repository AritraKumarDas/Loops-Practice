
// 7. Filter the odd numbers from an array.


const arr = [26, 57, -33, 12, , 0, 67, -27, 46, 99, 72, 59]

console.log("Entered Array: \n" + arr)

// ****************** Using Array "filter" Method ***************************

const filteredArr = arr.filter(item => item % 2 === 1 || item % 2 === -1)

// ***************** Using conventional method *****************************

// const filteredArr = []
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 1 || arr[i] % 2 === -1) {
//         filteredArr.push(arr[i])
//     }
// }



if (filteredArr.length > 0) {
    console.log("Odd numbers are: \n" + filteredArr)
} else {
    console.log("No odd numbers found")
}



