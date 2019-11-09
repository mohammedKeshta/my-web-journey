#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Mon Apr 29 12:29:22 2019

@author: melzanaty
"""
import json


def writingToFile():
    f = open("some_file.txt", "w")
    f.write("Hello!!")
    f.write("You've read the contents of this file!")
    f.close()


def readFromFile():
    f = open("some_file.txt", "r")
    file_data = f.readline()
    print(file_data)
    f.close


def readFromFileAutoClose():
    with open("some_file.txt", "r") as f:
        file_data = f.read()
        print(file_data)


def readFromFileAtSpecificPosition():
    with open("camelot.txt", "r") as f:
        """
        Each time we called read on the file with an integer argument,
        it read up to that number of characters, outputted them,
        and kept the 'window' at that position for the next call to read.
        """
        file_data = f.read(18)
        print(file_data)


def creatJSONFile():
    json.dumps(["Ahmed", "Mohammed", "Omar"])


def main():

    writingToFile()
    readFromFile()
    readFromFileAutoClose()
    readFromFileAtSpecificPosition()
    creatJSONFile()


# Driver Code
if __name__ == '__main__':

    # Calling main() function
    main()
