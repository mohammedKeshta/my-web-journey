'''
Created on Sat Jan 25 2020 17:03:18
 
Copyright (c) 2020 - Mohammed Elzanaty - sceel.io 
'''

# Assume s is a string of lower case characters.

# Write a program that prints the longest substring of s
# in which the letters occur in alphabetical order.
# For example, if s = 'azcbobobegghakl', then your program should print

# Longest substring in alphabetical order is: beggh
# In the case of ties, print the first substring. For example, if s = 'abcbcd', then your program should print
# Longest substring in alphabetical order is: abc

s = 'azcbobobegghakl'
longest_substring_in_alphabetical_order = ''
s = s.lower()

for i, letter in enumerate(s):
    str = ''
    isAlphap = True
    while isAlphap: 
        if s[i] < s[i+1]: 
            str += letter
            print(str)
            continue
        isAlphap = False
        

output = 'Longest substring in alphabetical order is: {}'.format(
    longest_substring_in_alphabetical_order)
print(output)
