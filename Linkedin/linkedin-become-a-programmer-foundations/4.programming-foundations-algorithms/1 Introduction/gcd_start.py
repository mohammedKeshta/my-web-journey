# Find the greatest common denominator of two numbers
# using Euclid's algorithm

# Mohammed Elzanaty
# Senior Frontend Engineer @ Vodafone International Services 

def gcd(a, b):
    small = min(a, b)
    if b == 0:
        return a
    for i in range(1, small+1):
        if a % i == 0 and b % i == 0:
            gcd = i
    return gcd


# try out the function with a few examples
print(gcd(60, 96))  # should be 12
print(gcd(20, 8))   # should be 4
