/* -- Count Pairs whose sum is less than target --
Given an array arr[] and an integer target. You have to find the number of pairs in the array whose sum is strictly less than the target.
  Input: arr[] = [7, 2, 5, 3], target = 8
  Output: 2
  Explanation: There are 2 pairs with sum less than 8: (2, 5) and (2, 3). 
  Input: arr[] = [5, 2, 3, 2, 4, 1], target = 5
  Output: 4
  Explanation: There are 4 pairs whose sum is less than 5: (2, 2), (2, 1), (3, 1) and (2, 1).
  Input: arr[] = [2, 1, 8, 3, 4, 7, 6, 5], target = 7
  Output: 6
  Explanation: There are 6 pairs whose sum is less than 7: (2, 1), (2, 3), (2, 4), (1, 3), (1, 4) and (1, 5). */

int countPairs(vector<int> &arr, int target) {
    int n = arr.size();
    if(n <= 1) return 0;
    sort(arr.begin(), arr.end());
    int i=0, j=n-1, pairCount=0;
    while(i < j) {
        if(arr[i]+arr[j] < target) {
            pairCount += j-i;
            i++;
        } else {
            j--;
        }
    }
    return pairCount;
}
