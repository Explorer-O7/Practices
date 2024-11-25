/* -- Maximum Product Subarray --
Given an array arr[] that contains positive and negative integers (may contain 0 as well). Find the maximum product that we can get in a subarray of arr.
  Input: arr[] = [-2, 6, -3, -10, 0, 2]
  Output: 180
  Explanation: The subarray with maximum product is {6, -3, -10} with product = 6 * (-3) * (-10) = 180.
  Input: arr[] = [-1, -3, -10, 0, 60]
  Output: 60
  Explanation: The subarray with maximum product is {60}.
  Input: arr[] = [2, 3, 4] 
  Output: 24 
  Explanation: For an array with all positive elements, the result is product of all elements. */

int maxProduct(vector<int> &arr) {
    int n = arr.size();
    int p1=1, p2=1, ans=INT_MIN;
    for(int i=0; i<n; i++) {
        p1 *= arr[i];
        p2 *= arr[n-i-1];
        
        ans = max({ans, p1, p2});
        
        if(p1 == 0) p1 = 1;
        if(p2 == 0) p2 = 1;
    }
    return ans;
}
