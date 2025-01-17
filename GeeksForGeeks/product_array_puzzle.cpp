/* -- Product array puzzle --
Given an array, arr[] construct a product array, res[] where each element in res[i] is the product of all elements in arr[] except arr[i]. Return this resultant array, res[].
Note: Each element is res[] lies inside the 32-bit integer range.
  Input: arr[] = [10, 3, 5, 6, 2]
  Output: [180, 600, 360, 300, 900]
  Explanation: For i=0, res[i] = 3 * 5 * 6 * 2 is 180.
  For i = 1, res[i] = 10 * 5 * 6 * 2 is 600.
  For i = 2, res[i] = 10 * 3 * 6 * 2 is 360.
  For i = 3, res[i] = 10 * 3 * 5 * 2 is 300.
  For i = 4, res[i] = 10 * 3 * 5 * 6 is 900.
  Input: arr[] = [12, 0]
  Output: [0, 12]
  Explanation: For i = 0, res[i] is 0.
  For i = 1, res[i] is 12. */

vector<int> productExceptSelf(vector<int>& arr) {
    int n=arr.size(), zeroCount=0, index=-1;
    long long int totalProd=1;
    vector<int> ans(n, 0);
    for(int i=0; i<n; i++) {
        if(arr[i]) {
            totalProd *= arr[i];
        } else {
            zeroCount++;
            index = i;
        }
    }
    if(zeroCount > 1) {
        return ans;
    } else if(zeroCount == 1) {
        ans[index] = totalProd;
        return ans;
    } else {
        for(int i=0; i<n; i++)
            ans[i] = (int)(totalProd/arr[i]);
        return ans;
    }
}
