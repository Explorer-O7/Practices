/* Task: Given an array, A, of N integers, print A's elements in reverse order as a single line of space-separated numbers. */

function main() {
    const n = parseInt(readLine().trim(), 10);
    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    
    var revStr = '';
    for(let i=arr.length-1; i>=0; i--) {
        revStr = revStr + arr[i] + ' ';
    }
    console.log(revStr.slice(0, revStr.length-1));
}
