"""
 Notes:
    1. An if statement is a conditional statement that runs or skips code based on whether a condition is true or false
    2. elif is short for "else if."
"""

import random

phone_balance, bank_balance = 8, 100

if phone_balance < 5:
    phone_balance += 10
    bank_balance -= 10

print('{} {}'.format(phone_balance, bank_balance))

seasons = ['spring', 'summer', 'fall', 'winter']
season = random.choice(seasons)

if season == 'spring':
    print('plant the garden!')
elif season == 'summer':
    print('water the garden!')
elif season == 'fall':
    print('harvest the garden!')
elif season == 'winter':
    print('stay indoors!')
else:
    print('unrecognized season')

