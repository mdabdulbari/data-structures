function isPalindrome(input) {
    const inputStr = input.toString();
    const length = inputStr.length;
    for (let i = 0; i < length / 2; i++) {
        if (inputStr[i] !== inputStr[length - i - 1]) {
            return false;
        }
        return true;
    }
}

console.log(isPalindrome(2002));
console.log(isPalindrome(202));
console.log(isPalindrome(203));
console.log(isPalindrome(2003));
