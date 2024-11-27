/* -- Smallest Positive Missing Number --
You are given an integer array arr[]. Your task is to find the smallest positive number missing from the array.
  Input: arr[] = [2, -3, 4, 1, 1, 7]
  Output: 3
  Explanation: Smallest positive missing number is 3.
  Input: arr[] = [5, 3, 2, 5, 1]
  Output: 4
  Explanation: Smallest positive missing number is 4.
  Input: arr[] = [-8, 0, -1, -4, -3]
  Output: 1
  Explanation: Smallest positive missing number is 1. */

int missingNumber(vector<int> &arr) {
    int n = arr.size();
    for(int i=0; i<n; i++) {
        if(arr[i]<=0)
            arr[i] = (int)1e9;
    }
    for(int i=0; i<n; i++) {
        int cur = abs(arr[i]);
        if(cur>0 && cur<=n)
            arr[cur-1] = - abs(arr[cur-1]);
    }
    for(int i=0; i<n; i++) {
        if(arr[i]>0)
            return i+1;
    }
    return n+1;
}
