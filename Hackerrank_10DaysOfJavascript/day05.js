/* -- Inheritance --
Task: Implementation for a class Rectangle is provided. Perform the following tasks:
 * Add an area method to Rectangle's prototype.
 * Create a Square class that satisfies the following:
  * It is a subclass of Rectangle.
  * It contains a constructor and no other methods.
  * It can use the Rectangle class' area method to print the area of a Square object. */

class Rectangle {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }
}
Rectangle.prototype.area = function() { return this.w * this.h; }

class Square extends Rectangle {
    constructor(a) { super(a, a); }
}

if (JSON.stringify(Object.getOwnPropertyNames(Square.prototype)) === JSON.stringify([ 'constructor' ])) {
    const rec = new Rectangle(3, 4);
    const sqr = new Square(3);
    console.log(rec.area());
    console.log(sqr.area());
} else {
    console.log(-1);
    console.log(-1);
}

/* -- Template Literals --
Task: The code in the editor has a tagged template literal that passes the area and perimeter of a rectangle to a tag function named sides. Recall that the first argument of a tag function is an array of string literals from the template, and the subsequent values are the template's respective expression values.
Complete the sides function so that it does the following:
 1. Finds the initial values of s1 and s2 by plugging the area and perimeter values into the formula:
    s1 = (P+(Math.sqrt(P^2-16*A)))/4, s2 = (P-(Math.sqrt(P^2-16*A)))/4
    where A is the rectangle's area and P is its perimeter.
 2. Creates an array consisting of s1 and s2 and sorts it in ascending order.
 3. Returns the sorted array. */

function sides(literals, ...expressions) {
    let A = expressions[0], P = expressions[1];
    let s1, s2;
    s1 = (P + Math.sqrt(P**2 - 16*A))/4;
    s2 = (P - Math.sqrt(P**2 - 16*A))/4;
    return [s1,s2].sort();
}

function main() {
    let s1 = +(readLine());
    let s2 = +(readLine());
  
    [s1, s2] = [s1, s2].sort();
    const [x, y] = sides`The area is: ${s1 * s2}.\nThe perimeter is: ${2 * (s1 + s2)}.`;  
    console.log((s1 === x) ? s1 : -1);
    console.log((s2 === y) ? s2 : -1);
}

/* -- Arrow Functions --
Task: Complete the function in the editor. It has one parameter: an array, nums. It must iterate through the array performing one of the following actions on each element:
 * If the element is even, multiply the element by 2.
 * If the element is odd, multiply the element by 3.
The function must then return the modified array. */

function modifyArray(nums) {
    nums.map((val, idx)=>{
        if(val%2 == 0)
            nums[idx] *= 2;
        else
            nums[idx] *= 3;
    });
    return nums;
}

function main() {
    const n = +(readLine());
    const a = readLine().split(' ').map(Number);   
    console.log(modifyArray(a).toString().split(',').join(' '));
}
