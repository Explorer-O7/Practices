/* -- Running Time and Complexity --
Task: A prime is a natural number greater than 1 that has no positive divisors other than 1 and itself. Given a number, n, determine and print whether it is Prime or Not prime.
Note: If possible, try to come up with a O(sqrt(n)) primality algorithm, or see what sort of optimizations you come up with for an O(n) algorithm. */

function processData(input) {
    //Enter your code here
    input = input.split('\n');
    let T = input[0];
    for(let i=1; i<=T; i++) {     
        if(isPrime(input[i]))
            console.log("Prime");
        else
            console.log("Not prime");
    }
}

function isPrime(num) {
    if(num <= 1) return false;
    else if(num <= 3) return true;
    else if(num%2==0 || num%3==0) return false;
    else{
        for(let j=5; j*j<=num; j+=6) {
            if(num%j==0 || num%(j+2)==0)
                return false;
        }
    }
    return true;
}
