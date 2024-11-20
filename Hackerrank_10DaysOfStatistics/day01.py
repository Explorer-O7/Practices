''' -- Quartiles --
Task: Given an array, arr, of n integers, calculate the respective first quartile (Q1), second quartile (Q2), and third quartile (Q3). It is guaranteed that Q1, Q2, and Q3 are integers. '''

import math
import os
import random
import re
import sys
from math import ceil
from typing import List

def median(arr : List[int]) -> float:
    size = len(arr)
    if(size%2 == 0):
        ans = (arr[size//2 - 1] + arr[size//2]) / 2
    else:
        ans = arr[size//2]
    return ans

def quartiles(arr):
    arr.sort()
    n = len(arr)
    result = []
    left = arr[0 : n//2]
    right = arr[ceil(n/2) :]
    result.append(int(median(left)))
    result.append(int(median(arr)))
    result.append(int(median(right)))
    return result

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')
    n = int(input().strip())
    data = list(map(int, input().rstrip().split()))
    res = quartiles(data)

    fptr.write('\n'.join(map(str, res)))
    fptr.write('\n')
    fptr.close()

''' -- Interquartile Range --
Task: The interquartile range of an array is the difference between its first (Q1) and third (Q3) quartiles (i.e., Q3-Q1).
Given an array, values, of n integers and an array, freqs, representing the respective frequencies of values's elements, construct a data set, S, where each value[i] occurs at frequency freq[i]. Then calculate and print S's interquartile range, rounded to a scale of 1 decimal place (i.e., 12.3 format). '''

import math
import os
import random
import re
import sys
from typing import List
from math import ceil

def median(data: List[int]) -> float:
    n = len(data)
    if(n%2 == 0):
        result = (data[n//2-1] + data[n//2]) / 2
    else:
        result = data[n//2]
    return result

def interQuartile(values, freqs):
    size = len(values)
    S = []
    for i in range(0, size):
        for j in range(0, freqs[i]):
            S.append(values[i])
    S.sort()
    left = S[ : len(S)//2]
    right = S[ceil(len(S)/2) :]
    Q1 = median(left)
    Q3 = median(right)
    inter_quartile_range = Q3-Q1
    print(f'{inter_quartile_range :.1f}')

if __name__ == '__main__':
    n = int(input().strip())
    val = list(map(int, input().rstrip().split()))
    freq = list(map(int, input().rstrip().split()))

    interQuartile(val, freq)

''' -- Standard Deviation --
Task: Given an array, arr, of n integers, calculate and print the standard deviation. Your answer should be in decimal form, rounded to a scale of 1 decimal place (i.e., 12.3 format). An error margin of +-0.1 will be tolerated for the standard deviation. '''

import math
import os
import random
import re
import sys

def stdDev(arr):
    size = len(arr)
    mean = sum(arr)/size
    squared_dist_sum = 0
    for ele in arr:
        squared_dist_sum += (ele-mean)**2
    std_deviation = (squared_dist_sum/size)**0.5
    print(round(std_deviation, 1))

if __name__ == '__main__':
    n = int(input().strip())
    vals = list(map(int, input().rstrip().split()))

    stdDev(vals)
