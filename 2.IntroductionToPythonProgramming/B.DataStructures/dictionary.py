"""
 Dictionary:
    1. A data Type for MUTABLE OBJECTS that store MAPPINGS of UNIQUE keys to values
    2. IDENTITY OPERATORS
        is -> evaluates if both sides have the same identity.
        is not -> evaluates if both sides have DIFFERENT identities.
    3. Dictionary keys must be immutable
    4. list CAN NOT be used as a key. Since lists can be changed by adding and removing elements, they are mutable.
    5. get() looks up values in a dictionary, but unlike looking up values with square brackets, get() returns None (or a default value of your choice) if the key isn't found.
    6. if you define a variable with an empty set of curly braces like this: a = {},
       Python will assign an empty dictionary to that variable. You can always use set() and dict() to define empty sets and dictionaries as well.
"""

####################################################
# Quiz: Define a Dictionary
####################################################
"""
 Define a dictionary named population that contains this data:
    Keys	  |     Values
    ----------|-------
    Shanghai  |     17.8
    Istanbul  |	    13.3
    Karachi	  |     13.0
    Mumbai	  |     12.5
"""
population = {
    'Shanghai': 17.8,
    'Istanbul': 13.3,
    'Karachi': 13.0,
    'Mumbai': 12.5,
    12: 12,
    15.4: 10,
}

print(population['Shanghai'])
print(population[12])
print(population[15.4])
# print(population[[1, 2]]) # TypeError: unhashable type: 'list'
# print(population['MohammedElzanaty']) # KeyError
print(population.get('MohammedElzanaty', 'There\'s no name called MohammedElzanaty'))

####################################################
# Quiz: More With Dictionaries
####################################################

animals = {'dogs': [20, 10, 15, 8, 32, 15], 'cats': [3, 4, 2, 8, 2, 4], 'rabbits': [2, 3, 3],
           'fish': [0.3, 0.5, 0.8, 0.3, 1]}

print(animals['dogs'])
print(animals['dogs'][3])
# print(animals[3])  # KeyError
print(animals['fish'])

####################################################
# Quiz: Identify the Problem
####################################################
room_numbers = {
    ['Freddie', 'Jen']: 403,
    ['Ned', 'Keith']: 391,
    ['Kristin', 'Jazzmyne']: 411,
    ['Eugene', 'Zach']: 395
}

print(room_numbers)
