/* -- Find All Triplets with Zero Sum --
Given an array arr[], find all possible triplets i, j, k in the arr[] whose sum of elements is equals to zero. 
Returned triplet should also be internally sorted i.e. i<j<k.
  Input: arr[] = [0, -1, 2, -3, 1]
  Output: [[0, 1, 4], [2, 3, 4]]
  Explanation: Triplets with sum 0 are:
  arr[0] + arr[1] + arr[4] = 0 + (-1) + 1 = 0
  arr[2] + arr[3] + arr[4] = 2 + (-3) + 1 = 0
  Input: arr[] = [1, -2, 1, 0, 5]
  Output: [[0, 1, 2]]
  Explanation: Only triplet which satisfies the condition is arr[0] + arr[1] + arr[2] = 1 + (-2) + 1 = 0
  Input: arr[] = [2, 3, 1, 0, 5]
  Output: [[]]
  Explanation: There is no triplet with sum 0. */

vector<vector<int>> findTriplets(vector<int> &arr) {
    int n = arr.size();
    vector<vector<int>> ans;
    unordered_map<int, vector<int>> map;
    for(int i=0; i<n; i++)
        map[arr[i]].push_back(i);
    for(int i=0; i<n-2; i++) {
        for(int j=i+1; j<n-1; j++) {
            int rem = -(arr[i]+arr[j]);
            if(map.find(rem) != map.end()) {
                int size = map[rem].size();
                for(int k=size-1; k>=0; k--) {
                    if(map[rem][k] <= j) break;
                    ans.push_back({i, j, map[rem][k]});
                }
            }
        }
    }
    sort(ans.begin(), ans.end());
    return ans;
}
