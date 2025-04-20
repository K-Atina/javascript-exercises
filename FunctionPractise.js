function add(a,b){
    let result=a+b;
    return result;
}
console.log(add(4,5));

//Functions as Arrow Functions
//greetUser(name) → returns Hello, [name]!
const greetUser = n => "Hello " + n;
console.log(greetUser("Kellie"));

//subtract(a, b) → returns the difference
const subtract = (a,b) => a - b;
console.log(subtract(4,6));

//isEven(n) → returns true if number is even, else false
const isEven = n => n % 2 === 0;
console.log(isEven(4))

//getArea(length, width) → returns area of a rectangle
const getArea= (length,width) => length* width;
console.log(getArea(30,12));

//toUpperCase(word) → returns the word in uppercase
const toUpperCase = Text => Text.toUpperCase();
console.log(toUpperCase("i am a small person"));

//maxOfThree(a, b, c)
//Returns the largest of the 3 numbers.
const maxOfThree = (a,b,c) => Math.max(a,b,c);
console.log(maxOfThree(3,6,9));

//reverseString(str)
//Returns the reversed version of the string.
const reverseString = n => n.split('').reverse().join('');
console.log(reverseString("Kellie"));

// isPalindrome(word)
//Returns true if the word is a palindrome (reads the same forward and backward), else false.
const isPalindrome = n => n === n.split('').reverse().join('');
console.log(isPalindrome("Hello"))

//countVowels(str)
//Counts how many vowels (a, e, i, o, u) are in the string.
const countVowels= n =>{
    const matches = n.match(/[aeiou]/gi)
    return matches ? matches.length: 0;
};
console.log(countVowels("banana"));

//. fizzBuzz(n)
//Returns:
//"Fizz" if divisible by 3
//"Buzz" if divisible by 5
//"FizzBuzz" if divisible by both
//The number itself otherwise

const fizzBuzz = n => {
    if (n % 3 === 0 && n % 5 === 0) {
        return "FizzBuzz";
    } else if (n % 3 === 0) {
        return "Fizz";
    } else if (n % 5 === 0) {
        return "Buzz";
    } else {
        return n;
    }
};
console.log(fizzBuzz(3));

