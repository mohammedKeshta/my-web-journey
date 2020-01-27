'''
    Created on Mon Jan 27 2020 12:19:27
 
    Copyright (c) 2020 - Mohammed Elzanaty - sceel.io 
'''
expression = 3 > 4
print(expression) # 

expression = 4.0 > 3.999
print(expression)

expression = 4 > 4
print(expression)

expression =  4 > + 4
print(expression)

expression = 2 + 2 == 4
print(expression)

expression = True or False
print(expression)

expression = False or False
print(expression)

expression = not False
print(expression)

expression = 3.0 - 1.0 != 5.0 - 3.0
print(expression)

expression = 3 > 4 or (2 < 3 and 9 > 10)
print(expression)

expression = 4 > 5 or 3 < 4 and 9 > 8
print(expression)

expression = not(4 > 3 and 100 > 6)
print(expression)
