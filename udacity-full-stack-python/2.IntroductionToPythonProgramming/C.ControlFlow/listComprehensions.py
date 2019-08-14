#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sat Apr 27 13:05:20 2019

@author: melzanaty
"""


####################################################
# Quiz: Extract First Names
####################################################
# '''
# Use a list comprehension to create a new list first_names containing just the first names in names in lowercase.
# '''
names = ["Rick Sanchez", "Morty Smith", "Summer Smith", "Jerry Smith", "Beth Smith"]

first_names = [name.split(' ')[0].lower() for name in names]
print(first_names)


####################################################
# Quiz: Multiples of Three
####################################################
# '''
# Use a list comprehension to create a list multiples_3 containing the first 20 multiples of 3.
# '''
multiples_3 = [number*3 for number in range(1, 21)]
print(multiples_3)

####################################################
# Quiz: Filter Names by Scores
####################################################
# '''
# Use a list comprehension to create a list of names passed that only include those that scored at least 65.
# '''
scores = {
             "Rick Sanchez": 70,
             "Morty Smith": 35,
             "Summer Smith": 82,
             "Jerry Smith": 23,
             "Beth Smith": 98
          }

passed = [name for name, score in scores.items() if score >= 65]

print(passed)