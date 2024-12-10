/* -- Non-overlapping Intervals --
  Input: intervals[][] = [[1, 2], [2, 3], [3, 4], [1, 3]]
  Output: 1
  Explanation: [1, 3] can be removed and the rest of the intervals are non-overlapping.
  Input: intervals[][] = [[1, 3], [1, 3], [1, 3]]
  Output: 2
  Explanation: You need to remove two [1, 3] to make the rest of the intervals non-overlapping.
  Input: intervals[][] = [[1, 2], [5, 10], [18, 35], [40, 45]]
  Output: 0
  Explanation: All ranges are already non overlapping. */

static bool func(vector<int> &a, vector<int> &b) {
    if(a[1] < b[1]) return true;
    else if(a[1] > b[1]) return false;
    return a[0] <= b[0];
}

int minRemoval(vector<vector<int>> &intervals) {
    sort(intervals.begin(), intervals.end(), func);
    int ans=0, last=0, n=intervals.size();
    for(int i=1; i<n; i++) {
        if(intervals[i][0] < intervals[last][1]) ans++;
        else last = i;
    }
    return ans;
}
