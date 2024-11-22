/* -- Move All Zeroes To End --
Given an array arr[]. Push all the zeros of the given array to the right end of the array while maintaining the order of non-zero elements. Do the mentioned change in the array in place.
  Input: arr[] = [1, 2, 0, 4, 3, 0, 5, 0]
  Output: [1, 2, 4, 3, 5, 0, 0, 0]
  Explanation: There are three 0s that are moved to the end.
  Input: arr[] = [10, 20, 30]
  Output: [10, 20, 30]
  Explanation: No change in array as there are no 0s.
  Input: arr[] = [0, 0]
  Output: [0, 0]
  Explanation: No change in array as there are all 0s. */

void pushZerosToEnd(vector<int>& arr) {
    int b=-1;
    for(int i=0; i<arr.size(); i++) {
        if(arr[i]==0) {
            b = i;
            break;
        }
    }
    if(b==-1) return;
    for(int i=b+1; i<arr.size(); i++) {
        if(arr[i]!=0) {
            int temp = arr[i];
            arr[i] = arr[b];
            arr[b] = temp;
            b++;
        }
    }
}
