#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sun Apr 28 15:59:09 2019

@author: melzanaty
"""
name = input("Enter your name: ")
print("Hello there, {}!".format(name.title()))


def multiply(x, y):

    return x * y


num1 = int(input("Enter a first number : "))
num2 = int(input("Enter a second number : "))
print("The multiply of {} * {} = {}".format(num1, num2, multiply(num1, num2)))

result = eval(input("Enter an expression: "))
print(result)
