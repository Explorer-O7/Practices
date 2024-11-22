/* -- Rotate Array --
Given an unsorted array arr[]. Rotate the array to the left (counter-clockwise direction) by d steps, where d is a positive integer. Do the mentioned change in the array in place.
Note: Consider the array as circular.
  Input: arr[] = [1, 2, 3, 4, 5], d = 2
  Output: [3, 4, 5, 1, 2]
  Explanation: when rotated by 2 elements, it becomes 3 4 5 1 2.
  Input: arr[] = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20], d = 3
  Output: [8, 10, 12, 14, 16, 18, 20, 2, 4, 6]
  Explanation: when rotated by 3 elements, it becomes 8 10 12 14 16 18 20 2 4 6.
  Input: arr[] = [7, 3, 9, 1], d = 9
  Output: [3, 9, 1, 7]
  Explanation: when we rotate 9 times, we'll get 3 9 1 7 as resultant array. */

void reverse(int i, int j, vector<int>& arr) {
    while(i<j) {
        arr[i] = arr[i]+arr[j];
        arr[j] = arr[i]-arr[j];
        arr[i] = arr[i]-arr[j];
        i++;
        j--;
    }
}
void rotateArr(vector<int>& arr, int d) {
    int n = arr.size();
    d %= n;
    reverse(0, d-1, arr);
    reverse(d, n-1, arr);
    reverse(0, n-1, arr);
}
