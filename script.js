function factorial(a) {
    let result = 1
    let a = 10;
    for (i = a; i > 0; i--) {
        result *= i
    }
    return result
}
console.log(a)

// function factorial(num) {
//     let result = 1
//     for (i = num; i > 0; i--) {
//         result = result * i
//     }
//     return result

// }

// console.log(factorial(6))

function compare(n1, n2) {
    if (n1 > n2) {
        return n1
    }
    else {
        return n2
    }
}
console.log(compare(200, 30))

let array1 = ["mango", "naspati", "pineapple", "apple", "papaya"]

function slice(array) {
    let result = []
    result = array.slice(2, 3)
    return result
}
console.log(slice(array1))

let array2 = ["mango", "naspati", "pineapple", "apple", "papaya"];

function splice1(array) {
    let result = []
    result = array.splice(2, 'strawbery');
    return result
}
console.log(splice1(array2));



let arry1 = [1, 2, 3, 4, 5]
let arry2 = [5, 4, 3, 2, 1]

function addArrays(arrr1, arry2) {
    let result1 = 0
    for (i = 0; i < arrr1.length; i++) {
        result1 += arry1[i]

    } for (j = 0; j < arry2.length; j++) {
        result1 = result1 + arry2[j]

    }
    return result1
}
console.log(addArrays(arry1, arry2));



let array = ["orange", "apple", "mango", "banana", "kiwi", "Pineapple"];
var a = 10;
array.splice(1, 2, "Strawberry");
console.log(array);

function evenoddnumbers(num) {
    if (num % 2 == 0) {
        return "even"
    }
    else return "odd"
}
console.log(evenoddnumbers("195"));

function palindrome(string) {

    let arrystring = string.split('')

    let reversearry = arrystring.reverse('')

    let reversestring = reversearry.join('')

    if (string == reversestring) {

        return "it is a palindrome"
    }
    else "it is not palindrome"
}

console.log(palindrome("refer"));







