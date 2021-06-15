function isBalanced(expression) {
    const brackets = {
        "[": "]",
        "(": ")",
        "{": "}",
    };
    const stack = [];
    for (let i = 0; i < expression.length; i++) {
        const bracket = expression[i];
        if (brackets[bracket]) {
            stack.push(bracket);
        } else {
            if (bracket !== brackets[stack.pop()]) {
                return false;
            }
        }
    }
    if (stack.length !== 0) {
        return false;
    }
    return true;
}

console.log(isBalanced("[()]{}{[()()]()}"));
console.log(isBalanced("[(])"));
