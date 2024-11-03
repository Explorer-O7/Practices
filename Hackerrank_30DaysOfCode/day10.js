/* -- Binary Numbers --
Task: Given a base-10 integer, n, convert it to binary (base-2). Then find and print the base-10 integer denoting the maximum number of consecutive 1's in n's binary representation. When working with different bases, it is common to show the base as a subscript. */

function decimalToBinaryWithMaxConsecutive1s(num) {
 let str='';
 let max=-1, count=0;
 let i=num;
 while(i>0) {
  if(i%2==0)
   str = 0 + str;
  else
   str = 1 + str;
  i = parseInt(i/2);
 }
 for(i=0; i<str.length; i++) {
  if(str.charAt(i)=='1')
   count++;
  else
   count = 0;
  max = Math.max(max, count);
 }
 return max;
}

function main() {
    const n = parseInt(readLine().trim(), 10);
    let result = decimalToBinaryWithMaxConsecutive1s(n);
    console.log(result);
}
