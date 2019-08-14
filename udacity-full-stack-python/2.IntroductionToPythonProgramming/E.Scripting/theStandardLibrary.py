#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Mon Apr 29 13:37:00 2019

@author: melzanaty
"""
import math
import random

####################################################
# Quiz: Compute an Exponent
####################################################
'''
 import and use the math module. Use the math module
 to calculate e to the power of 3. print the answer.
 https://en.wikipedia.org/wiki/E_(mathematical_constant)
'''

e = 2.718281828
print(math.pow(e, 3))

####################################################
# Quiz: Password Generator
####################################################
'''
 Write a function called generate_password that
 selects three random words from the list of words word_list
 and concatenates them into a single string.
 Your function should not accept any arguments
 and should reference the global variable word_list
 to build the password.
'''
word_file = "words.txt"
word_list = []

# fill up the word_list
with open(word_file, 'r') as words:
    for line in words:
        # remove white space and make everything lowercase
        word = line.strip().lower()
        # don't include words that are too long or too short
        if 3 < len(word) < 8:
            word_list.append(word)


def generate_password():
    return "".join(random.sample(word_list, 3))


print(generate_password())
