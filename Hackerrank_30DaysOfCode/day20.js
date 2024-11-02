/* Task: Given an array, a, of size n distinct elements, sort the array in ascending order using the Bubble Sort algorithm above. Once sorted, print the following 3 lines:
 1. Array is sorted in numSwaps swaps.
    where numSwaps is the number of swaps that took place.
 2. First Element: firstElement
    where firstElement is the first element in the sorted array.
 3. Last Element: lastElement
    where lastElement is the last element in the sorted array. */

function main() {
    const n = parseInt(readLine().trim(), 10);
    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    var numSwaps = 0;
    for(let i=0; i<n; i++) {
        for(let j=0; j<n-1; j++) {
            if(a[j]>a[j+1]) {
                let temp = a[j];
                a[j] = a[j+1];
                a[j+1] = temp;
                numSwaps++;
            }
        }
        if(numSwaps == 0) break;
    }

    console.log(`Array is sorted in ${numSwaps} swaps.`);
    console.log(`First Element: ${a[0]}`);
    console.log(`Last Element: ${a[n-1]}`);
}
