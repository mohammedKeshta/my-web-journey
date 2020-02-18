#  -*- coding: utf-8 -*-
#  Created on 2/10/20, 1:50 PM
#  Copyright (c)   - @author: Mohammed Elzanaty

"""
Write a for loop that sums the values 1 through end,
inclusive. end is a variable that we define for you.
So, for example, if we define end to be 6, your code should print out the result: 21
which is 1 + 2 + 3 + 4 + 5 + 6.
"""

end = int(input('Enter End Number: '))
total = 0

for counter in range(end + 1):
    total += counter

print(total)
