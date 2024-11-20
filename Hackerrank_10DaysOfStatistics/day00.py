''' -- Mean, Median, and Mode --
Task: Given an array, X, of N integers, calculate and print the respective mean, median, and mode on separate lines. If your array contains more than one modal value, choose the numerically smallest one.
Note: Other than the modal value (which will always be an integer), your answers should be in decimal form, rounded to a scale of 1 decimal place (i.e., 12.3, 7.0 format). '''

import math
import os
import random
import re
import sys
from typing import List

def mean(numbers: List[int]) -> str:
    return f'{sum(numbers)/len(numbers) :.1f}';

def median(numbers: List[int]) -> str:
    numbers.sort()
    size = len(numbers)
    if(size%2 == 0):
        result = (numbers[size//2 - 1] + numbers[size//2]) / 2
    else:
        result = numbers[size//2]
    return f'{result :.1f}'

def mode(numbers: List[int]) -> str:
    map = {}
    for number in numbers:
        map[number] = map.get(number, 0)+1
    max_count = max(map.values())
    curr_min = float('inf')
    for key, value in map.items():
        if value==max_count and key<curr_min:
            curr_min = key
    return f'{curr_min}'

input()
numbers = list(map(int, input().split()))
print(mean(numbers))
print(median(numbers))
print(mode(numbers))

''' -- Weighted Mean --
Task: Given an array, X, of N integers and an array, W, representing the respective weights of X's elements, calculate and print the weighted mean of X's elements. Your answer should be rounded to a scale of 1 decimal place (i.e., 12.3 format). '''

import math
import os
import random
import re
import sys

def weightedMean(X, W):
    if(len(X) == len(W)):
        size = len(X)
    result = 0
    for i in range(0, size):
        result += X[i]*W[i]
    result /= sum(W)
    print(round(result, 1))

if __name__ == '__main__':
    n = int(input().strip())
    vals = list(map(int, input().rstrip().split()))
    weights = list(map(int, input().rstrip().split()))

    weightedMean(vals, weights)
