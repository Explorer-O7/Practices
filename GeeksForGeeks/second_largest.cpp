/* -- Second Largest --
Given an array of positive integers arr[], return the second largest element from the array. If the second largest element doesn't exist then return -1.
Note: The second largest element should not be equal to the largest element.
  Input: arr[] = [12, 35, 1, 10, 34, 1]
  Output: 34
  Explanation: The largest element of the array is 35 and the second largest element is 34.
  Input: arr[] = [10, 5, 10]
  Output: 5
  Explanation: The largest element of the array is 10 and the second largest element is 5.
  Input: arr[] = [10, 10, 10]
  Output: -1
  Explanation: The largest element of the array is 10 and the second largest element does not exist. */

int getSecondLargest(vector<int> &arr) {
    int n = arr.size();
    sort(arr.begin(), arr.end());
    for(int i=n-2; i>=0; i--) {
        if(arr[i]!=arr[n-1])
            return arr[i];
    }
    return -1;
}
