/* -- Sum Pair closest to target --
Given an array arr[] and a number target, find a pair of elements (a, b) in arr[], where a<=b whose sum is closest to target.
Note: Return the pair in sorted order and if there are multiple such pairs return the pair with maximum absolute difference. If no such pair exists return an empty array.
  Input: arr[] = [10, 30, 20, 5], target = 25
  Output: [5, 20]
  Explanation: As 5 + 20 = 25 is closest to 25.
  Input: arr[] = [5, 2, 7, 1, 4], target = 10
  Output: [2, 7]
  Explanation: As (4, 7) and (2, 7) both are closest to 10, but absolute difference of (2, 7) is 5 and (4, 7) is 3. Hence, [2, 7] has maximum absolute difference and closest to target. 
  Input: arr[] = [10], target = 10
  Output: []
  Explanation: As the input array has only 1 element, return an empty array. */

vector<int> sumClosest(vector<int>& arr, int target) {
    int n = arr.size();
    if(n <= 1) return {};
    sort(arr.begin(), arr.end());
    int left=0, right=n-1, diff=INT_MAX, first=-1, second=-1;
    while(left < right) {
        int sum = arr[left]+arr[right];
        if(diff > abs(sum-target)) {
            first = arr[left];
            second = arr[right];
            diff = abs(sum-target);
        } else if(diff == abs(sum-target)) {
            if(arr[right]-arr[left] > second-first) {
                first = arr[left];
                second = arr[right];
            }
        }
        if(sum <= target) left++;
        else right--;
    }
    if(first==-1 and second==-1) return {};
    return {first, second} ;
}
