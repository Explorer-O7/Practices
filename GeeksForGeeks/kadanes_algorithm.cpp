/* -- Kadane's Algorithm --
Given an integer array arr[]. You need to find the maximum sum of a subarray.
  Input: arr[] = [2, 3, -8, 7, -1, 2, 3]
  Output: 11
  Explanation: The subarray {7, -1, 2, 3} has the largest sum 11.
  Input: arr[] = [-2, -4]
  Output: -2
  Explanation: The subarray {-2} has the largest sum -2.
  Input: arr[] = [5, 4, 1, 7, 8]
  Output: 25
  Explanation: The subarray {5, 4, 1, 7, 8} has the largest sum 25. */

int maxSubarraySum(vector<int> &arr) {
    int n = arr.size();
    int sum=0, ans=INT_MIN;
    for(int i=0; i<n; i++) {
        sum += arr[i];
        ans = max(ans, sum);
        if(sum < 0)
            sum = 0;
    }
    return ans;
}
