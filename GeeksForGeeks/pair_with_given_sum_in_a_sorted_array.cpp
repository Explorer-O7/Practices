/* -- Pair with given sum in a sorted array --
You are given an integer target and an array arr[]. You have to find number of pairs in arr[] which sums up to target. It is given that the elements of the arr[] are in sorted order.
Note: pairs should have elements of distinct indexes.
  Input: arr[] = [-1, 1, 5, 5, 7], target = 6
  Output: 3
  Explanation: There are 3 pairs which sum up to 6 : {1, 5}, {1, 5} and {-1, 7}.
  Input: arr[] = [1, 1, 1, 1], target = 2
  Output: 6
  Explanation: There are 6 pairs which sum up to 2 : {1, 1}, {1, 1}, {1, 1}, {1, 1}, {1, 1} and {1, 1}.
  Input: arr[] = [-1, 10, 10, 12, 15], target = 125
  Output: 0
  Explanation: There is no such pair which sums up to 4. */

int countPairs(vector<int> &arr, int target) {
    int n=arr.size(), pairCount=0;
    int i=0, j=n-1;
    while(i < j) {
        int sum = arr[i]+arr[j];
        if(sum < target) {
            i++;
        } else if(sum > target) {
            j--;
        } else {
            if(arr[i] == arr[j]) {
                int temp = j-i;
                pairCount += (temp*(temp+1))/2;
                break;
            } else {
                int left=1, right=1;
                while(i<j and arr[i]==arr[i+1]) {
                    left++;
                    i++;
                }
                while(i<j and arr[j-1]==arr[j]) {
                    right++;
                    j--;
                }
                pairCount += (left*right);
                i++;
                j--;
            }
        }
    }
    return pairCount;
}
