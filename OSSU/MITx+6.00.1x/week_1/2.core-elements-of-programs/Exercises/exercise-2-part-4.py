#  -*- coding: utf-8 -*-
#  Created on 2/9/20, 9:48 PM
#  Copyright (c)   - @author: Mohammed Elzanaty
# https://stackoverflow.com/a/509295/6483379

str1 = 'hello'
str2 = ','
str3 = 'world'
str4 = str1 + str3  # helloworld

print(str3[:-1])  # worl
print(str1[1:])  # ello
print(str4[1:9])  # elloworl
print(str4[1:9:2])  # elwr
print(str4[::-1])  # dlrowolleh
