#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sat Apr 27 00:35:15 2019

@author: melzanaty
"""

####################################################
# Quiz: Create an HTML List
####################################################
# '''
# Write a while loop that finds the largest square number less than an integerlimit 
# and stores it in a variable nearest_square. 
# A square number is the product of an integer multiplied by itself, 
# for example 36 is a square number because it equals 6*6.
# '''
nearest_square = 0
limit = 40
counter = 1

while (counter+1)**2 < limit:
    counter += 1

nearest_square = counter**2
print(nearest_square)    

