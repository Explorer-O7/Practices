/* -- Majority Element II --
You are given an array of integer arr[] where each number represents a vote to a candidate. Return the candidates that have votes greater than one-third of the total votes, If there's not a majority vote, return an empty array.
Note: The answer should be returned in an increasing format.
  Input: arr[] = [2, 1, 5, 5, 5, 5, 6, 6, 6, 6, 6]
  Output: [5, 6]
  Explanation: 5 and 6 occur more n/3 times.
  Input: arr[] = [1, 2, 3, 4, 5]
  Output: []
  Explanation: no candidate occur more than n/3 times. */

vector<int> findMajority(vector<int>& arr) {
    int n = arr.size();
    int c1=0, c2=0, n1=INT_MIN, n2=INT_MIN;
    vector<int> ans;
    for(int ele : arr) {
        if(ele == n1) {
            c1++;
        } else if(ele == n2) {
            c2++;
        } else if(c1 == 0) {
            n1 = ele;
            c1 = 1;
        } else if(c2 == 0) {
            n2 = ele;
            c2 = 1;
        } else {
            c1--;
            c2--;
        }
    }
    c1 = c2 = 0;
    for(int ele : arr) {
        if(ele == n1) c1++;
        else if(ele == n2) c2++;
    }
    if(c1 > n/3) ans.push_back(n1);
    if(c2 > n/3) ans.push_back(n2);
    sort(ans.begin(), ans.end());
    return ans;
}
