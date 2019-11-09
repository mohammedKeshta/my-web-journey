#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sun Apr 28 20:20:33 2019

@author: melzanaty
"""
# https://docs.python.org/3/library/os.html
# importing modules
import os

# Main Function


def main():

    for filename in os.listdir("prank"):
        newFileName = ''.join(i for i in filename if not i.isdigit())
        # rename the original file
        os.rename(filename, newFileName)


# Driver Code
if __name__ == '__main__':

    # Calling main() function
    main()
