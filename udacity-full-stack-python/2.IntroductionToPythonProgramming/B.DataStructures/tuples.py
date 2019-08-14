"""
 Tuples:
    1. immutable
    2. heterogeneous data structures (i.e., their entries have different meanings)
    3. ordered data structure that can be indexed and sliced like a list.
    4. defined by listing a sequence of elements separated by commas, optionally contained within parentheses: ()
    ex:
        my_location = (42, 11)  # page number, line number


 List:
    1. mutable
    2. homogeneous sequences. Tuples have structure, lists have order.
    3. ordered

"""

tuple_a = 1, 2
tuple_b = (1, 2)

print(tuple_a == tuple_b) # True
print(tuple_a[1]) # 2