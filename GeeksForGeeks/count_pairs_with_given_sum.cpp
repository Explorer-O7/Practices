/* -- Count pairs with given sum --
Given an array arr[] and an integer target. You have to find numbers of pairs in array arr[] which sums up to given target.
  Input: arr[] = [1, 5, 7, -1, 5], target = 6 
  Output: 3
  Explanation: Pairs with sum 6 are (1, 5), (7, -1) and (1, 5). 
  Input: arr[] = [1, 1, 1, 1], target = 2 
  Output: 6
  Explanation: Pairs with sum 2 are (1, 1), (1, 1), (1, 1), (1, 1), (1, 1).
  Input: arr[] = [10, 12, 10, 15, -1], target = 125
  Output: 0 */

int countPairs(vector<int> &arr, int target) {
    unordered_map<int, int> map;
    int ans = 0;
    for(int x : arr) {
        if(map[target-x]) ans+=map[target-x];
        map[x]++;
    }
    return ans;
}
