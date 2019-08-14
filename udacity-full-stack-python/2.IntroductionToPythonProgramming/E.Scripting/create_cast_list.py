# !/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Mon Apr 29 01:29:22 2019

@author: melzanaty
"""


def file():
    filePath = "flying_circus_cast.txt"

    def create_cast_list(filename):
        cast_list = []
        with open(filePath, "r+") as f:
            for line in f:
                cast_list.append(line.split(",")[0])
        return cast_list

    cast_list = create_cast_list(filePath)
    for actor in cast_list:
        print(actor)


def main():
    file()


# Driver Code
if __name__ == '__main__':

    # Calling main() function
    main()
