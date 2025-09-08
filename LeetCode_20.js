/*
20. Valid Parentheses - Easy
----------------------------
Topic: Stack, String

Given a string `s` containing just the characters '(', ')', '{', '}', '[' and ']', 
determine if the input string is valid.

An input string is valid if:
1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.

Example:
Input:  "([{}])"
Output: true

Input:  "([)]"
Output: false

Time Complexity:  O(n) - we go through each character once
Space Complexity: O(n) - stack can store all opening brackets in worst case
*/



var isValid = function(s) {
    let stack = [];                                        // stack to keep opening brackets
    let map = { ')': '(', ']': '[', '}': '{' };            // mapping closing → opening

    for (let i = 0; i < s.length; ++i) {                   // loop through each character in the string
        let char = s[i];                                   // current character

        if (char === '(' || char === '[' || char === '{') {
            stack.push(char);                              // push opening brackets to stack
        } else {
            // if stack is empty or top of stack does not match current closing bracket
            if (stack.length === 0 || stack[stack.length - 1] !== map[char]) {
                return false;                              // invalid, return false
            }
            stack.pop();                                   // pop matching opening bracket
        }
    }

    return stack.length === 0;                             // if stack empty -> all brackets matched
}


// Test Cases
console.log(isValid("()"));        // true  -> single pair, valid
console.log(isValid("()[]{}"));    // true  -> multiple pairs, valid
console.log(isValid("(]"));        // false -> mismatched brackets
console.log(isValid("([{}])"));    // true  -> nested brackets, valid
console.log(isValid("([)]"));      // false -> wrong order, invalid
