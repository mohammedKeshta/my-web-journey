'''
Created on Sat Jan 25 2020 15:38:28
 
Copyright (c) 2020 - Mohammed Elzanaty - sceel.io 
'''

# Assume s is a string of lower case characters.

# Write a program that prints the number of times the string 'bob' occurs in s.
# For example, if s = 'azcbobobegghakl', then your program should print Number of times bob occurs is: 2

s = 'azcbobobegghakl'
# s = 'bobooboobobbuob'

bob = 'bob'
bob_length = len(bob)
current_pos = 0
bob_occurs = 0

for index, letter in enumerate(s):
    str = s[index-1: current_pos]
    if str == 'bob':
        bob_occurs += 1
    current_pos = index + 3

output = 'Number of times bob occurs is: {}'.format(bob_occurs)
print(output)
