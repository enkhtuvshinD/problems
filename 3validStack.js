var isValid = function (s) {
    const stack = [];
    const bracketMap = {
        '}': '{',']': '[',')': '('
    }
    for (const b of s) {
        if (b === '[' || b === '{' || b === '(') {
            stack.push(b);
        }
        else {
            if (stack.pop() !== bracketMap[b]) {
                return false
            }
        }
    }
    return stack.length === 0;
};