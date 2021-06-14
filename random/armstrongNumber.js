function isArmStrong(givenNumber) {
    let number = givenNumber;
    const numberOfDigits = number.toString().length;
    let total = 0;
    while (number) {
        const lastNumber = number % 10;
        total += Math.pow(lastNumber, numberOfDigits);
        number = Math.floor(number / 10);
    }
    if (givenNumber === total) {
        return true;
    }
    return false;
}

const number = 153;
console.log(isArmStrong(number));
