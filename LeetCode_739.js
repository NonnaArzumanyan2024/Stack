/*
739. Daily Temperatures - Medium
--------------------------------
Topic: Monotonic Stack, Array

Given an array of integers `temperatures` representing the daily temperatures, 
return an array `answer` such that `answer[i]` is the number of days you have to wait 
after the i-th day to get a warmer temperature. If there is no future day, keep `answer[i] = 0`.

Example:
Input:  [73,74,75,71,69,72,76,73]
Output: [1,1,4,2,1,1,0,0]

Explanation:
- Day 0 (73) → wait 1 day (74 is warmer)
- Day 1 (74) → wait 1 day (75 is warmer)
- Day 2 (75) → wait 4 days (76 is warmer)
- Day 6 (76) → no warmer days ahead → 0
*/



var dailyTemperatures = function(temperatures) {
    let result = new Array(temperatures.length).fill(0);           // result array filled with 0
    let stack = [];                                                // stack keeps indexes of decreasing temperatures

    for (let i = 0; i < temperatures.length; ++i) {                // go through each day
        while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {        // while current temp is warmer than last stacked temp
            let prev = stack.pop();                                // get previous index
            result[prev] = i - prev;                               // count days waited
        }

        stack.push(i);                                             // push current day index to stack
    }

    return result;
}


// Test Cases 
console.log(dailyTemperatures([12, 15, 14, 17, 13, 18, 20, 19]));  // [1,2,1,2,1,1,0,0]
console.log(dailyTemperatures([0, 2, 5, 10]));                     // [1,1,1,0]
console.log(dailyTemperatures([-3, 0, 5]));                        // [1,1,0]
console.log(dailyTemperatures([30, 25, 20, 15]));                  // [0,0,0,0]
console.log(dailyTemperatures([8, 8, 8, 8, 8]));                   // [0,0,0,0,0]
