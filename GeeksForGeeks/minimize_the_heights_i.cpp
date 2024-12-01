/* -- Minimize The Heights I --
Given a positive integer k and an array arr[] denoting heights of towers, you have to modify the height of each tower either by increasing or decreasing them by k only once.
Find out what could be the possible minimum difference of the height of shortest and longest towers after you have modified each tower.
  Input: k = 2, arr[] = [1, 5, 8, 10]
  Output: 5
  Explanation: The array can be modified as [3, 3, 6, 8]. The difference between the largest and the smallest is 8 - 3 = 5.
  Input: k = 3, arr[] = [3, 9, 12, 16, 20]
  Output: 11
  Explanation: The array can be modified as [6, 12, 9, 13, 17]. The difference between the largest and the smallest is 17 - 6 = 11. */

int getMinDiff(int k, vector<int> &arr) {
    sort(arr.begin(), arr.end());
    int n = arr.size();
    int ans = arr[n-1]-arr[0];
    int shortest, longest;
    for(int i=0; i<=n-2; i++) {
        shortest = min(arr[0]+k, arr[i+1]-k);
        longest = max(arr[i]+k, arr[n-1]-k);
        ans = min(abs(longest-shortest), ans);
    }
    return ans;
}