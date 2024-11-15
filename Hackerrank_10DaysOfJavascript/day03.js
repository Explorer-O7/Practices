/* -- Arrays --
Task: Complete the getSecondLargest function.
getSecondLargest has the following parameters:
 * int nums[n]: an array of integers
 * int: the second largest number in nums */

function getSecondLargest(nums) {
    let largest = nums[0];
    for(let x=1; x<nums.length; x++) {
        if(nums[x]>largest) {
            largest = nums[x];
        }
    }
    let secondLargest = nums[0];
    for(let x=1; x<nums.length; x++) {
        if(nums[x]>secondLargest && nums[x]<largest) {
            secondLargest = nums[x];
        }
    }
    return secondLargest;
}

function main() {
    const n = +(readLine());
    const nums = readLine().split(' ').map(Number);
    console.log(getSecondLargest(nums));
}

/* -- Try, Catch, and Finally --
Task: Complete the reverseString function; it has one parameter, s. You must perform the following actions:
 1. Try to reverse string s using the split, reverse, and join methods.
 2. If an exception is thrown, catch it and print the contents of the exception's message on a new line.
 3. Print s on a new line. If no exception was thrown, then this should be the reversed string; if an exception was thrown, this should be the original string. */

function reverseString(s) {
    try {
        s = s.split('').reverse().join('');
    } catch(error) {
        console.log(error.message);
    } finally {
        console.log(s);
    }
}

function main() {
    const s = eval(readLine());
    reverseString(s);
}

/* -- Throw --
Task: Complete the isPositive function. It has one integer parameter, a. If the value of a is positive, it must return the string YES. Otherwise, it must throw an Error according to the following rules:
 * If a is 0, throw an Error with message = Zero Error.
 * If a is negative, throw an Error with message = Negative Error. */

function isPositive(a) {
    if(parseInt(a)==0)
        throw new Error("Zero Error");
    else if(parseInt(a)<0)
        throw new Error("Negative Error");
    return "YES";
}

function main() {
    const n = +(readLine());
    for (let i = 0; i < n; i++) {
        const a = +(readLine());
      
        try {
            console.log(isPositive(a));
        } catch (e) {
            console.log(e.message);
        }
    }
