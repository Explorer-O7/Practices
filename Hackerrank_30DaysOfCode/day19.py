''' Task: The AdvancedArithmetic interface and the method declaration for the abstract divisorSum(n) method are provided.
Complete the implementation of Calculator class, which implements the AdvancedArithmetic interface. The implementation for the divisorSum(n) method must return the sum of all divisors of n. '''

class AdvancedArithmetic(object):
    def divisorSum(n):
        raise NotImplementedError
        
class Calculator(AdvancedArithmetic):
    def divisorSum(self, n):
        ub = int(n/2)+1
        if(n==1):
            return 1
        else:
            sum_of_divisor = n+1
            for i in range(2, ub):
                if(n%i == 0):
                    sum_of_divisor += i
        return sum_of_divisor

n = int(input())
my_calculator = Calculator()
s = my_calculator.divisorSum(n)
print("I implemented: " + type(my_calculator).__bases__[0].__name__)
print(s)
