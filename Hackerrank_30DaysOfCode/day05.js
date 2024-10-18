/* Task: Given an integer, n, print its first 10 multiples. Each multiple nxi (where 1<=i<=10) should be printed on a new line in the form: n x i = result. */

function main() {
    const n = parseInt(readLine().trim(), 10);
    for(let i=1; i<=10; i++) {
        console.log(`${n} x ${i} = ${n*i}`);
    }
}
