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
