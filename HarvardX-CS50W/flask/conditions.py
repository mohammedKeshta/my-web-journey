import random

x = random.randint(-10, 10)

print(f"Random Number is {x} and ", end="")
if x > 0:
    print("x is positive")
elif x < 0:
    print("x is negative")
else:
    print("x is zero")
