#  -*- coding: utf-8 -*-
#  Created on 2/9/20, 10:42 PM
#  Copyright (c)   - @author: Mohammed Elzanaty

"""
Assume that two variables, varA and varB, are assigned values, either numbers or strings.
Write a piece of Python code that evaluates varA and varB, and then prints out one of the following messages:

    "string involved" if either varA or varB are strings

    "bigger" if varA is larger than varB

    "equal" if varA is equal to varB

    "smaller" if varA is smaller than varB
"""
varA = 'testA'
varB = 'testB'

if isinstance(varA, str) or isinstance(varB, str):
    print("string involved")
elif varA > varB:
    print("bigger")
elif varA == varB:
    print("equal")
elif varA < varB:
    print("smaller")
