/* -- Longest substring with distinct characters --
Given a string s, find the length of the longest substring with all distinct characters.
  Input: s = "geeksforgeeks"
  Output: 7
  Explanation: "eksforg" is the longest substring with all distinct characters.
  Input: s = "aaa"
  Output: 1
  Explanation: "a" is the longest substring with all distinct characters.
  Input: s = "abcdefabcbb"
  Output: 6
  Explanation: The longest substring with all distinct characters is "abcdef", which has a length of 6. */

int longestUniqueSubstr(string &s) {
    int left=0, maxLength=INT_MIN;
    unordered_set<char> seen;
    for(int right=0; right<s.size(); right++) {
        while(seen.find(s[right]) != seen.end())
           seen.erase(s[left++]);
        seen.insert(s[right]);
        maxLength = max(maxLength, right-left+1);
    }
    return maxLength;
}
