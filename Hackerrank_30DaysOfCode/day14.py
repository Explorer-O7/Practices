''' Task: Complete the Difference class by writing the following:
 * A class constructor that takes an array of integers as a parameter and saves it to the __elements instance variable.
 * A computeDifference method that finds the maximum absolute difference between any 2 numbers in __elements and stores it in the maximumDifference instance variable. '''

class Difference:
    def __init__(self, a):
        self.__elements = a

    def computeDifference(self):
        maximum = self.__elements[0]
        minimum = self.__elements[0]
        for i in range(1, len(self.__elements)):
            if(self.__elements[i] > maximum):
                maximum = self.__elements[i]
            if(self.__elements[i] < minimum):
                minimum = self.__elements[i]
        self.maximumDifference = maximum - minimum;

_ = input()
a = [int(e) for e in input().split(' ')]

d = Difference(a)
d.computeDifference()
print(d.maximumDifference)
