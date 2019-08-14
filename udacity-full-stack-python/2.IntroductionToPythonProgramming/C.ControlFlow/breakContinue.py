#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sat Apr 27 10:42:25 2019

@author: melzanaty
"""

manifest = [("bananas", 15), ("mattresses", 24), ("dog kennels", 42), ("machine", 120), ("cheeses", 5)]

# skips an iteration when adding an item would exceed the limit
# breaks the loop if weight is exactly the value of the limit
weight = 0
items = []

for cargo_name, cargo_weight in manifest: 
   if weight >= 100: 
       break;
   elif weight + cargo_weight > 100:
        continue
   else: 
       items.append(cargo_name)
       weight += cargo_weight

print("\nFinal Weight: {}".format(weight))
print("Final Items: {}".format(items))
