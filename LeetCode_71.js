/*
71. Simplify Path - Medium
--------------------------
Topic: Stack, String

Given a string `path` representing an absolute path in a Unix-style file system,
simplify it and return the canonical path.

Rules:
1. The path always starts with '/'.
2. "." means current directory → ignore it.
3. ".." means go one level up → remove the last folder from path if it exists.
4. Multiple slashes '//' → treated as a single '/'.
5. Folder names with more than two dots (e.g., "....") are valid folder names.
6. The result must not end with '/' unless it is root.

Examples:
Input:  "/home/"
Output: "/home"

Input:  "/home//foo/"
Output: "/home/foo"

Input:  "/home/user/Documents/../Pictures"
Output: "/home/user/Pictures"

Input:  "/../"
Output: "/"

Input:  "/A/....../B"
Output: "/A/....../B"
*/



var simplifyPath = function(path) {
    let stack = [];                                              //Create an empty array called stack. We will use it like a stack to keep folder names in order.
    let parts = path.split("/");                                 //Split the path string at every /.

    for (let part of parts) {
        if (part === "" || part === ".") {
            continue;                                            // ignore empty and "."
        } else if (part === "..") {
            if (stack.length) stack.pop();                       // go up one level if possible
        } else {
            stack.push(part);                                    // valid folder name → add to stack
        }
    }

    return "/" + stack.join("/");                                // join stack into canonical path
};


// Test Cases
console.log(simplifyPath("/home/"));                             // "/home"
console.log(simplifyPath("/home//foo/"));                        // "/home/foo"
console.log(simplifyPath("/home/user/Documents/../Pictures"));   // "/home/user/Pictures"
console.log(simplifyPath("/../"));                               // "/"
console.log(simplifyPath("/A/....../B"));                        // "/A/....../B"
