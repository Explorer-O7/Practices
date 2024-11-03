/* -- Intro to Conditional Statements --
Task: Given an integer, , perform the following conditional actions:
 * If  is odd, print Weird
 * If  is even and in the inclusive range of  to , print Not Weird
 * If  is even and in the inclusive range of  to , print Weird
 * If  is even and greater than , print Not Weird */

function main() {
    const N = parseInt(readLine().trim(), 10);
    if(N%2 == 0) {
        if(N>=2 && N<=5)
         console.log("Not Weird");
        else if(N>=6 && N<=20)
         console.log("Weird");
        else
         console.log("Not Weird");
    } else {
        console.log("Weird");
    }
}
