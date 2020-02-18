#  -*- coding: utf-8 -*-
#  Created on 2/10/20, 1:52 PM
#  Copyright (c)   - @author: Mohammed Elzanaty

num = 10
for num in range(5):
    print(num)
print(num)

divisor = 2
for num in range(0, 10, 2):
    print(num / divisor)

for variable in range(20):
    if variable % 4 == 0:
        print(variable)
    if variable % 16 == 0:
        print('Foo!')

for letter in 'hola':
    print(letter)

count = 0
for letter in 'Snow!':
    print('Letter # ' + str(count) + ' is ' + str(letter))
    count += 1
    break
print(count)

"""
Letter # 0 is S
1
"""
