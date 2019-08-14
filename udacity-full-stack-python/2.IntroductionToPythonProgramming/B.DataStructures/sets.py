"""
 Sets:
    1. A data Type for MUTABLE UNORDERED collections of unique elements
    2. When you pop an element from a set a random element is removed (remember that sets, unlike lists, are unordered so there is no "last element"). The number 5 may or may not be removed.
    3. you can modify the elements in a set with methods like add and pop.
    4, is an unordered data structure, so you can't index and slice elements like a list; there is no sequence of positions to index with!
"""

list = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4]

set = set(list)
print(set)  # {1, 2, 3, 4}

print('length of list {}, and length of set is {}'.format(len(list),
                                                          len(set)))  # length of list 10, and length of set is 4

set.add(5)
set.pop()
print(set)  # {2, 3, 4, 5}
