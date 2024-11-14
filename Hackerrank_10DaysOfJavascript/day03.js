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
