/* -- Trapping Rain Water --
Given an array arr[] with non-negative integers representing the height of blocks. If the width of each block is 1, compute how much water can be trapped between the blocks during the rainy season.
  Input: arr[] = [3, 0, 2, 0, 4]
  Output: 7
  Explanation: Total water trapped = 0 + 3 + 1 + 3 + 0 = 7 units.
  Input: arr[] = [1, 2, 3, 4]
  Output: 0
  Explanation: We cannot trap water as there is no height bound on both sides.
  Input: arr[] = [2, 1, 5, 3, 1, 0, 4]
  Output: 9
  Explanation: Total water trapped = 0 + 1 + 0 + 1 + 3 + 4 + 0 = 9 units. */

int maxWater(vector<int> &arr) {
    int left=0, right=arr.size()-1, left_max=0, right_max=0, trappedUnit=0;
    while(left < right) {
        if(arr[left] <= arr[right]) {
            if(arr[left] >= left_max)
                left_max = arr[left];
            else
                trappedUnit += (left_max-arr[left]);
            left++;
        } else {
            if(arr[right] >= right_max)
                right_max = arr[right];
            else
                trappedUnit += (right_max-arr[right]);
            right--;
        }
    }
    return trappedUnit;
}
