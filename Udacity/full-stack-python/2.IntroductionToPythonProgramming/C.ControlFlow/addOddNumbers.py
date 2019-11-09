#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sat Apr 27 00:57:44 2019

@author: melzanaty
"""
# =============================================================================
# 
# add up the odd numbers in the list, but only up to the first 5 odd numbers together.
# If there are more than 5 odd numbers, you should stop at the fifth. If there are fewer than 5 odd numbers, 
# add all of the odd numbers.
# =============================================================================
num_list = [422, 136, 524, 85, 96, 719, 85, 92, 10, 17, 312, 542, 87, 23, 86, 191, 116, 35, 173, 45, 149, 59, 84, 69, 113, 166]

count_odd = 0
list_sum = 0
i = 0
len_num_list = len(num_list)

while (count_odd < 5) and (i < len_num_list): 
    if num_list[i] % 2 != 0:
        list_sum += num_list[i]
        count_odd += 1
    i += 1

print ("The numbers of odd numbers added are: {}".format(count_odd))
print ("The sum of the odd numbers added is: {}".format(list_sum))