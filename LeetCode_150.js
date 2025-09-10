/*
150. Evaluate Reverse Polish Notation - Medium
----------------------------------------------
Topic: Stack, Array

Given an array of tokens representing a Reverse Polish Notation (RPN) expression,
evaluate the expression and return its value.

Rules:
1. Tokens are either integers or operators: '+', '-', '*', '/'.
2. Division '/' should truncate toward zero.
3. No division by zero will occur.
4. Operands are valid integers.

Examples:
Input:  ["4","13","5","/","+"]
Output: 6
Explanation: 4 + (13 / 5) = 6

Input:  ["2","1","+","3","*"]
Output: 9
Explanation: (2 + 1) * 3 = 9

Complexity:
Time:  O(n) -> each token processed once
Space: O(n) -> stack to store operands
*/



var evalRPN = function(tokens) {
    let stack = [];                                           // create a stack to store numbers

    for (let token of tokens) {                               // traverse each token
        if (!isNaN(token)) {                                  // if token is a number
            stack.push(Number(token));                        // convert to number and push to stack
        } else {                                              // token is an operator
            let b = stack.pop();                              // pop second operand (top of stack)
            let a = stack.pop();                              // pop first operand (next top)
            let result;                                       // variable to store the result

            switch(token) {                                   // determine operation
                case '+':
                    result = a + b;                           // addition
                    break;
                case '-':
                    result = a - b;                           // subtraction
                    break;
                case '*':
                    result = a * b;                           // multiplication
                    break;
                case '/':
                    // truncate towards zero
                    result = a / b > 0 ? Math.floor(a / b) : Math.ceil(a / b);
                    break;
            }

            stack.push(result);                               // push the result back to stack
        }
    }

    return stack[0];                                          // final result is the only element left in stack
};


// Test Cases
console.log(evalRPN(["4","13","5","/","+"]));                 // 6 -> 4 + (13 / 5) = 6
console.log(evalRPN(["2","1","+","3","*"]));                  // 9 -> (2 + 1) * 3 = 9
console.log(evalRPN(["5","1","2","+","4","*","+","3","-"]));  // 14 -> 5 + ((1+2)*4) -3 = 14
console.log(evalRPN(["-7","2","/"]));                         // -3 -> -7 / 2 = -3 (truncate toward 0)
console.log(evalRPN(["0","3","/"]));                          // 0 -> 0 / 3 = 0
