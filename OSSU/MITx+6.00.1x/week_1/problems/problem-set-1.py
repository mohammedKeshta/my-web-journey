'''
Created on Sat Jan 25 2020
 
Copyright (c) 2020 - Mohammed Elzanaty - sceel.io 
'''


# Assume s is a string of lower case characters.
# Write a program that counts up the number of vowels contained in the string s.
# Valid vowels are: 'a', 'e', 'i', 'o', and 'u'.
# For # example, if s = 'azcbobobegghakl', your program should print: Number of vowels: 5

vowels = ['a', 'e', 'i', 'o', 'u']
counter = 0


for letter in s:
    if letter in vowels:
        counter += 1

output = 'Number of vowels: {}'.format(counter)
print(output)
