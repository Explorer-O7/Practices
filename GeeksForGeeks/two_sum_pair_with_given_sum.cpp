/* -- Two Sum-Pair with Given Sum --
Given an array arr[] of positive integers and another integer target. Determine if there exists two distinct indices such that the sum of there elements is equals to target.
  Input: arr[] = [1, 4, 45, 6, 10, 8], target = 16
  Output: true
  Explanation: arr[3] + arr[4] = 6 + 10 = 16.
  Input: arr[] = [1, 2, 4, 3, 6], target = 11
  Output: false
  Explanation: None of the pair makes a sum of 11. */

bool twoSum(vector<int>& arr, int target) {
    unordered_map<int, int> map;
    for(int x : arr) {
        if(map[target-x]) return true;
        map[x] = 1;
    }
    return false;
}
