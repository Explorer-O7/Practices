/* -- Arithmetic Operators --
Task: Complete the following functions in the editor below:
 1. getArea(length, width): Calculate and return the area of a rectangle having sides length and width.
 2. getPerimeter(length, width): Calculate and return the perimeter of a rectangle having sides length and width.
The values returned by these functions are printed to stdout. */

function getArea(length, width) {
    let area;
    area = length*width;
    return area;
}

function getPerimeter(length, width) {
    let perimeter;
    perimeter = 2*(length+width);
    return perimeter;
}

function main() {
    const length = +(readLine());
    const width = +(readLine());
    
    console.log(getArea(length, width));
    console.log(getPerimeter(length, width));
}

/* -- Functions --
Task: Implement a function named factorial that has one parameter: an integer, n. It must return the value of n! (i.e., n factorial). */

function factorial(n) {
    let fact = 1;
    for(let i=n; i>1; i--)
        fact *= i;
    return fact;
}

function main() {
    const n = +(readLine());
    console.log(factorial(n));
}

/* -- Let and Const --
Task: 1. Declare a constant variable, PI, and assign it the value Math.PI. You will not pass this challenge unless the variable is declared as a constant and named PI (uppercase).
      2. Read a number, r, denoting the radius of a circle from stdin.
      3. Use PI and r to calculate the area and perimeter of a circle having radius .
      4. Print area as the first line of output and print perimeter as the second line of output. */

function main() {
    const PI = Math.PI;
    var r = readLine();
    console.log(PI*r*r);
    console.log(2*PI*r);
    try {    
        PI = 0;
        console.log(PI);
    } catch(error) {
        console.error("You correctly declared 'PI' as a constant.");
    }
}
