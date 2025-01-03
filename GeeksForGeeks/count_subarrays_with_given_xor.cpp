/* -- Count Subarrays with given XOR --
Given an array of integers arr[] and a number k, count the number of subarrays having XOR of their elements as k.
  Input: arr[] = [4, 2, 2, 6, 4], k = 6
  Output: 4
  Explanation: The subarrays having XOR of their elements as 6 are [4, 2], [4, 2, 2, 6, 4], [2, 2, 6], and [6]. Hence, the answer is 4.
  Input: arr[] = [5, 6, 7, 8, 9], k = 5
  Output: 2
  Explanation: The subarrays having XOR of their elements as 5 are [5] and [5, 6, 7, 8, 9]. Hence, the answer is 2.
  Input: arr[] = [1, 1, 1, 1], k = 0
  Output: 4
  Explanation: The subarrays are [1, 1], [1, 1], [1, 1] and [1, 1, 1, 1]. */

long subarrayXor(vector<int> &arr, int k) {
    int XOR = 0;
    long subarrayCount = 0;
    unordered_map<int, int> map;
    for(int x : arr) {
        XOR ^= x;
        if(XOR == k)
            subarrayCount++;
        subarrayCount += map[XOR^k];
        map[XOR]++;
    }
    return subarrayCount;
}
