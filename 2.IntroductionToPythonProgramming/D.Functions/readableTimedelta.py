#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sun Apr 28 14:09:14 2019

@author: melzanaty
"""

####################################################
# Quiz: readable_timedelta
####################################################
'''
Write a function named readable_timedelta.
The function should take one argument, an integer days, and return a string
that says how many weeks and days that is.
For example, calling the function and printing the result like this:
'''


# complex solution with loops
def readable_timedelta_1(days):
    counter = 0
    numberOfWeeks = 0
    remainDays = days
    while counter < days and remainDays >= 7:

        if remainDays > 7:
            numberOfWeeks += 1
        else:
            numberOfWeeks = 1
        counter += 7
        remainDays -= 7
    return "{} week(s) and {} day(s).".format(numberOfWeeks, remainDays)

# https://stackoverflow.com/a/37082633/6483379


def readable_timedelta(days):

    numberOfWeeks = days // 7
    remainDays = days % 7
    return "{} week(s) and {} day(s).".format(numberOfWeeks, remainDays)


# test your function
print(readable_timedelta(10))
print(readable_timedelta(7))
