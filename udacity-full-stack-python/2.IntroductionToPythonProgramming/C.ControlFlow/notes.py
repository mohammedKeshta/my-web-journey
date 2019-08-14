"""
 Notes:
    1. An if statement is a conditional statement that runs or skips code based on whether a condition is true or false
    2. elif is short for "else if."
    3. Iterable -> an object that can return one of its elements at a time
    4. range(start, stop, step) -> [ start, stop-1 ] /* step default  = 1 */
    5. If you wish to iterate through both keys and values, you can use the built-in method items
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

# Loops
for number in range(1, 7):
    print(number * 5)

print(list(range(0, -5)))  # []

cast = {
    "Jerry Seinfeld": "Jerry Seinfeld",
    "Julia Louis-Dreyfus": "Elaine Benes",
    "Jason Alexander": "George Costanza",
    "Michael Richards": "Cosmo Kramer"
}

for key, value in cast.items():
    print("Actor: {}    Role: {}".format(key, value))
