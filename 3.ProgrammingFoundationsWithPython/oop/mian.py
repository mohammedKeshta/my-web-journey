#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sun May  5 17:16:18 2019

@author: melzanaty
"""
import child


def main():

    son = child.Child("Mohammed", "Red", "15")
    print(son.last_name)
    print(son.number_of_toys)
    print(son.show_info())


# Driver Code
if __name__ == '__main__':

    # Calling main() function
    main()
