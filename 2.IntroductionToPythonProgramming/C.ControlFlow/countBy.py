#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sat Apr 27 00:19:37 2019

@author: melzanaty
"""
####################################################
# Quiz: Count By
####################################################
# ''' 
# Now in addition, address what would happen if someone gives a start_num that is greater than end_num. 
# If this is the case, set result to 
# "Oops! Looks like your start value is greater than the end value. Please try again." 
# Otherwise, set result to the value of break_num.
# '''

# provide some start number
start_num = 5
# provide some end number that you stop when you hit
end_num =  100
# provide some number to count by 
count_by = 2
# variable that you'll change each time through the loop.
break_num = start_num
# write a while loop that uses break_num as the ongoing number to 
#   check against end_num
if start_num < end_num: 
    while break_num < end_num: 
        break_num += count_by
    result = break_num
else: 
    result = "Oops! Looks like your start value is greater than the end value. Please try again."

print(result)
    
    










































