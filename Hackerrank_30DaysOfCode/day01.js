/* Task: The variables i, d, and s are already declared and initialized for you. You must:
1. Declare 3 variables: one of type int, one of type double, and one of type String.
2. Read 3 lines of input from stdin (according to the sequence given in the Input Format section below) and initialize your 3 variables.
3. Use the + operator to perform the following operations:
 i. Print the sum of  plus your int variable on a new line.
 ii. Print the sum of  plus your double variable to a scale of one decimal place on a new line.
 iii. Concatenate  with the string you read as input and print the result on a new line. */

function readLine() {
    return input_stdin_array[input_currentline++];
}

function main() {
    var i = 4
    var d = 4.0
    var s = "HackerRank "

    var intVar = parseInt(readLine());
    var dblVar = parseFloat(readLine());
    var strVar = readLine();
    
    console.log(i + intVar);
    console.log((d + dblVar).toFixed(1));
    console.log(s + strVar);
}
