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
