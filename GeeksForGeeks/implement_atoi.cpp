/* -- Implement Atoi --
Given a string s, the objective is to convert it into integer format without utilizing any built-in functions. Refer the below steps to know about atoi() function.
Cases for atoi() conversion:
 1. Skip any leading whitespaces.
 2. Check for a sign (‘+’ or ‘-‘), default to positive if no sign is present.
 3. Read the integer by ignoring leading zeros until a non-digit character is encountered or end of the string is reached. If no digits are present, return 0.
 4. If the integer is greater than 2^31 – 1, then return 2^31 – 1 and if the integer is smaller than -2^31, then return -2^31.
  Input: s = "-123"
  Output: -123
  Explanation: It is possible to convert -123 into an integer so we returned in the form of an integer
  Input: s = "  -"
  Output: 0
  Explanation: No digits are present, therefore the returned answer is 0.
  Input: s = " 1231231231311133"
  Output: 2147483647
  Explanation: The converted number will be greater than 231 – 1, therefore print 231 – 1 = 2147483647.
  Input: s = "-999999999999"
  Output: -2147483648
  Explanation: The converted number is smaller than -231, therefore print -231 = -2147483648.
  Input: s = "  -0012gfg4"
  Output: -12
  Explanation: Nothing is read after -12 as a non-digit character ‘g’ was encountered. */

int myAtoi(char *s) {
    int i=0, n=0, max=(1<<31)-1, min=(1<<31), ans=0;
    int pos = true;
    
    for(i=0; s[i]!='\0'; i++) n++;
    i=0;
    while(i<n && s[i]==' ') i++;
    
    if(s[i]=='-') {
        pos = false;
        i++;
    } else if(s[i]=='+') {
        i++;
    }
    while(i<n && s[i]=='0') i++;
    if(i==n) return 0;
    
    while(i<n && s[i]>=48 && s[i]<=57) {
        int cur = s[i]-'0';
        long val = (ans*10l) + cur;
        
        if(!pos) val = -val;
        if(val>max) return max;
        if(val<min) return min;
        
        ans = ans*10 + cur;
        i++;
    }
    return pos ? ans : -ans;
}
