/* -- Create a Rectangle Object --
Task: Complete the function. It has two parameters: a and b. It must return an object modeling a rectangle that has the following properties:
 * length: This value is equal to a.
 * width: This value is equal to b.
 * perimeter: This value is equal to 2*(a+b).
 * area: This value is equal to a*b. */

function Rectangle(a, b) {
    this.length = a;
    this.width = b;
    this.perimeter = 2*(a+b);
    this.area = a*b;
}

function main() {
    const a = +(readLine());
    const b = +(readLine());    
    const rec = new Rectangle(a, b);
    
    console.log(rec.length);
    console.log(rec.width);
    console.log(rec.perimeter);
    console.log(rec.area);
}

/* -- Count Objects --
Task: Complete the getCount function. It has one parameter: an array, a, of objects. Each object in the array has two integer properties denoted by x and y. The function must return a count of all such objects o in array a that satisfy o.x==o.y. */

function getCount(objects) {
    let count = 0;
    for(let obj of objects) {
        if(obj.x == obj.y) count++;
    }
    return count;
}

function main() {
    const n = +(readLine());
    let objects = [];
    
    for (let i = 0; i < n; i++) {
        const [a, b] = readLine().split(' ');
        objects.push({x: +(a), y: +(b)});
    }
    console.log(getCount(objects));
}

/* -- Classes --
Task: Create a Polygon class that has the following properties:
 * A constructor that takes an array of integer values describing the lengths of the polygon's sides.
 * A perimeter() method that returns the polygon's perimeter. */

class Polygon {
    arrOfSides;
    constructor(arr) {
        this.arrOfSides = arr;
    }
    perimeter() {
        return this.arrOfSides.reduce((acc,cur)=>acc+cur);
    }
}

const rectangle = new Polygon([10, 20, 10, 20]);
const square = new Polygon([10, 10, 10, 10]);
const pentagon = new Polygon([10, 20, 30, 40, 43]);
console.log(rectangle.perimeter());
console.log(square.perimeter());
console.log(pentagon.perimeter());
