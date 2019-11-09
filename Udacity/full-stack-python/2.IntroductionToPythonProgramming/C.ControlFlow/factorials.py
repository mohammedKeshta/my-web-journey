#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Fri Apr 26 23:52:30 2019

@author: melzanaty
"""

# number to find the factorial of
number = 6

# start with our product equal to one
product = 1

# track the current number being multiplied
current = 1

# write your while loop here
while current <= number:
    # multiply the product so far by the current number
    product *= current
    # increment current with each iteration until it reaches number
    current += 1


# print the factorial of number
print(product)


number = 6
product = 1
for current in range(1, number+1): 

    product *= current

print(product)