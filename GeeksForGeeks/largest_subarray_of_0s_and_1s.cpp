/* -- Largest Subarray of 0's and 1's --
Given an array arr of 0s and 1s. Find and return the length of the longest subarray with equal number of 0s and 1s.
  Input: arr[] = [1, 0, 1, 1, 1, 0, 0]
  Output: 6
  Explanation: arr[1...6] is the longest subarray with three 0s and three 1s.
  Input: arr[] = [0, 0, 1, 1, 0]
  Output: 4
  Explnation: arr[0...3] or arr[1...4] is the longest subarray with two 0s and two 1s.
  Input: arr[] = [0]
  Output: 0
  Explnation: There is no subarray with an equal number of 0s and 1s. */

int maxLen(vector<int> &arr) {
    int n=arr.size(), sum=0, ans=0;
    unordered_map<int, int> prefixSum;
    for(int i=0; i<n; i++) {
        sum += (arr[i]==1)?1:-1;
        if(sum == 0)
            ans = i+1;
        if(prefixSum.find(sum) != prefixSum.end()) {
            ans = max(ans, i-prefixSum[sum]);
        } else {
            prefixSum[sum] = i;
        }
    }
    return ans;
}
