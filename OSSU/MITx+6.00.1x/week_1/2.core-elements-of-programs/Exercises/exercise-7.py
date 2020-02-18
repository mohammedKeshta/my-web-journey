#  -*- coding: utf-8 -*-
#  Created on 2/10/20, 2:02 PM
#  Copyright (c)   - @author: Mohammed Elzanaty

iteration = 0
count = 0
while iteration < 5:
    for letter in "hello, world":
        count += 1
    print("Iteration " + str(iteration) + "; count is: " + str(count))
    iteration += 1

"""
-> First Counter 
    Iteration: 0 
    count: 12
    "Iteration 0; count is: 12
    Iteration: 1
-> Second Counter 
    Iteration: 1 
    count: 24
    "Iteration 1; count is: 24
    Iteration: 2   
    
PRINT:- 
Iteration 0; count is: 12
Iteration 1; count is: 24
Iteration 2; count is: 36
Iteration 3; count is: 48
Iteration 4; count is: 60
"""

