/* -- Longest Consecutive Subsequence --
Given an array arr[] of non-negative integers. Find the length of the longest sub-sequence such that elements in the subsequence are consecutive integers, the consecutive numbers can be in any order.
  Input: arr[] = [2, 6, 1, 9, 4, 5, 3]
  Output: 6
  Explanation: The consecutive numbers here are 1, 2, 3, 4, 5, 6. These 6 numbers form the longest consecutive subsquence.
  Input: arr[] = [1, 9, 3, 10, 4, 20, 2]
  Output: 4
  Explanation: 1, 2, 3, 4 is the longest consecutive subsequence.
  Input: arr[] = [15, 13, 12, 14, 11, 10, 9]
  Output: 7
  Explanation: The longest consecutive subsequence is 9, 10, 11, 12, 13, 14, 15, which has a length of 7. */

int longestConsecutive(vector<int>& arr) {
    int n = arr.size();
    if(n == 0) return 0;
    else if(n == 1) return 1;
    int longest = 1;
    unordered_set<int> set;
    for(int i=0; i<n; i++) {
        set.insert(arr[i]);
    }
    for(auto x : set) {
        int count = 1;
        int curr = x;
        if(set.find(curr-1) == set.end()) {
            while(set.find(++curr) != set.end()) count++;
        }
        longest = max(longest, count);
    }
    return longest;
}
