#  -*- coding: utf-8 -*-
#  Created on 2/10/20, 1:57 PM
#  Copyright (c)   - @author: Mohammed Elzanaty

myStr = '6.00x'

for char in myStr:
    print(char)

print('done')

"""
6
.
0
0
x
done
"""

greeting = 'Hello!'
count = 0

for letter in greeting:
    count += 1
    if count % 2 == 0:
        print(letter)
    print(letter)

print('done')

"""
H
e
e
l
l
l
o
!
!
done
"""

school = 'Massachusetts Institute of Technology'
numVowels = 0
numCons = 0

for char in school:
    if char == 'a' or char == 'e' or char == 'i' \
            or char == 'o' or char == 'u':
        numVowels += 1
    elif char == 'o' or char == 'M':
        print(char)
    else:
        numCons -= 1

print('numVowels is: ' + str(numVowels))
print('numCons is: ' + str(numCons))

"""

"""