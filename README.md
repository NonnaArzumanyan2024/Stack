LeetCode Stack Problems

This repository contains solutions to various LeetCode problems that use the Stack data structure.  
The goal is to practice and improve problem-solving skills in JavaScript, 
focusing on how stacks can be applied in different algorithmic challenges.


📚 What is a Stack?

A stack is a linear data structure that follows the LIFO (Last In, First Out) principle.  
This means the last element added is the first one to be removed.

Think of a stack of plates:
- You put the last plate on top.
- You remove the plate from the top first.


✨ Operations

- Push      → Add an element to the top of the stack.
- Pop       → Remove the top element.
- Peek/Top  → Look at the top element without removing it.
- isEmpty   → Check if the stack is empty.

In JavaScript, stacks can be implemented using arrays:

let stack = [];

// Push
stack.push(10); 
stack.push(20);

// Peek
console.log(stack[stack.length - 1]); // 20

// Pop
stack.pop(); // removes 20


❓ Why Do We Need a Stack?

Stacks are useful because they help us manage order of operations in situations where we need to:

1. Reverse a process → Example: Undo/Redo functionality in text editors.
2. Track state → Example: Checking if brackets are balanced in an expression.
3. Control function calls → Programming languages use a call stack to keep track of function execution.
4. Backtracking → Example: Solving mazes, DFS in trees and graphs.
5. Evaluate expressions → Example: Arithmetic evaluation (postfix, prefix).
6. Monotonic behavior → Example: Finding the next greater or smaller element.


⏳ When to Use a Stack?

You should think of using a stack when:

. You need to remember something temporarily and remove it later in reverse order.
. The problem mentions nested structures (like parentheses, XML/HTML tags).
. You are solving expression evaluation or parsing problems.
. You are asked to find the next greater/smaller element.
. You are implementing DFS algorithms.
. The problem requires backtracking (like exploring paths and returning to previous states).

