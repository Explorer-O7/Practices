/* Task:
Given a 6x6 2D Array, A:
  1 1 1 0 0 0
  0 1 0 0 0 0
  1 1 1 0 0 0
  0 0 0 0 0 0
  0 0 0 0 0 0
  0 0 0 0 0 0 
We define an hourglass in A to be a subset of values with indices falling in this pattern in A's graphical representation:
  a b c
    d
  e f g
There are 16 hourglasses in A, and an hourglass sum is the sum of an hourglass' values. Calculate the hourglass sum for every hourglass in A, then print the maximum hourglass sum.  */

function main() {
  var arr = [];
  for (let arr_i = 0; arr_i < 6; arr_i++) {
    arr[arr_i] = readLine().split(' ');
    arr[arr_i] = arr[arr_i].map(Number);
  }

  var sumArray = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i] && arr[i + 1] && arr[i + 2]) {
        if (arr[i][j + 1] != undefined && arr[i][j + 2] != undefined)
          sumArray.push(arr[i][j] + arr[i][j+1] + arr[i][j+2] + arr[i+1][j+1] + arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2])
      }
    }
  }
 console.log(Math.max.apply(null, sumArray));
}
