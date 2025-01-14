/* -- Equilibrium Point --
Given an array of integers arr[], the task is to find the first equilibrium point in the array.
The equilibrium point in an array is an index (0-based indexing) such that the sum of all elements before that index is the same as the sum of elements after it. Return -1 if no such point exists.
  Input: arr[] = [1, 2, 0, 3]
  Output: 2 
  Explanation: The sum of left of index 2 is 1 + 2 = 3 and sum on right of index 2 is 0 + 3 = 3.
  Input: arr[] = [1, 1, 1, 1]
  Output: -1
  Explanation: There is no equilibrium index in the array.
  Input: arr[] = [-7, 1, 5, 2, -4, 3, 0]
  Output: 3
  Explanation: The sum of left of index 3 is -7 + 1 + 5 = -1 and sum on right of index 3 is -4 + 3 + 0 = -1. */

int findEquilibrium(vector<int> &arr) {
    int n=arr.size(), left=0, right=0;
    for(int x : arr)
        right += x;
    for(int i=0; i<n; i++) {
        right -= arr[i];
        if(left == right) return i;
        left += arr[i];
    }
    return -1;
}
