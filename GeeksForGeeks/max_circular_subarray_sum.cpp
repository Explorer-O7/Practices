/* -- Max Circular Subarray Sum --
Given an array of integers arr[] in a circular fashion. Find the maximum subarray sum that we can get if we assume the array to be circular.
  Input: arr[] = [8, -8, 9, -9, 10, -11, 12]
  Output: 22
  Explanation: Starting from the last element of the array, i.e, 12, and moving in a circular fashion, we have max subarray as 12, 8, -8, 9, -9, 10, which gives maximum sum as 22.
  Input: arr[] = [10, -3, -4, 7, 6, 5, -4, -1]
  Output: 23
  Explanation: Maximum sum of the circular subarray is 23. The subarray is [7, 6, 5, -4, -1, 10].
  Input: arr[] = [-1, 40, -14, 7, 6, 5, -4, -1] 
  Output: 52
  Explanation: Circular Subarray [7, 6, 5, -4, -1, -1, 40] has the maximum sum, which is 52. */

int circularSubarraySum(vector<int> &arr) {
    int n=arr.size(), minimum=INT_MAX, maximum=INT_MIN;
    int sum1=0, sum2=0, total=0;
    for(int i=0; i<n; i++) {
        total += arr[i];
        sum2 = min(arr[i], sum2+arr[i]);
        minimum = min(minimum, sum2);
        sum1 = max(arr[i], sum1+arr[i]);
        maximum = max(maximum, sum1);
    }
    return max(maximum, total-minimum);
}
