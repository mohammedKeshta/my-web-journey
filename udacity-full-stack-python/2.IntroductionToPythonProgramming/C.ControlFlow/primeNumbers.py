#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sat Apr 27 11:20:36 2019

@author: melzanaty
"""

####################################################
# Quiz: Check for Prime Numbers
####################################################
# '''
# Write code to check if the numbers provided in the list check_prime are prime numbers.
# 1. If the numbers are prime, the code should print "[number] is a prime number."
# 2. If the number is NOT a prime number, it should print "[number] is not a prime number", 
#    and a factor of that number, other than 1 and the number itself: "[factor] is a factor of [number]".
# '''

check_prime = [3, 26, 39, 51, 53, 57, 79, 85]

# iterate through the check_prime list
for num in check_prime:
    # search for factors, iterating through numbers ranging from 2 to the number itself
    for i in range(2, num):
        # number is not prime if modulo is 0
        if (num % i) == 0:
            print("{} is NOT a prime number, because {} is a factor of {}".format(num, i, num))
            break
        # otherwise keep checking until we've searched all possible factors, and then declare it prime
        if i == num -1:    
            print("{} IS a prime number".format(num))
        


