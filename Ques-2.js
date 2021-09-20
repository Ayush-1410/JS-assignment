function Palindrome(string) {

    let len = string.length;

    for (let i = 0; i < len / 2; i++) {

        // check if first and last string are same
        if (string[i] !== string[len - 1 - i]) {
            return('It is not a palindrome');
        }
    }
    return('It is a palindrome');
}

// take input
let string = prompt('Enter a string: ');

// function call
const value = Palindrome(string);

console.log(value);
