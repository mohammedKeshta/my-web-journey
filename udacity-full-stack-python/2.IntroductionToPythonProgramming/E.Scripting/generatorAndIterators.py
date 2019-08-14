#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Mon Apr 29 14:19:59 2019

@author: melzanaty
"""
####################################################
# Quiz: Iterators and Generators
####################################################
'''
 import and use the math module. Use the math module
 to calculate e to the power of 3. print the answer.
 https://en.wikipedia.org/wiki/E_(mathematical_constant)
'''
lessons = ["Why Python Programming", "Data Types and Operators",
           "Control Flow", "Functions", "Scripting"]


def myEnumerate(iterable, start=0):

    count = start
    for lesson in iterable:
        yield count, lesson
        count += 1


def iterateUsingIterable():
    for i, lesson in enumerate(lessons):
        print("Lesson {}: {}".format(i, lesson))


def iterateUsingList():

    for i, lesson in enumerate(lessons):
        print("Lesson {}: {}".format(i, lesson))


####################################################
# Quiz: Chunker
####################################################
'''
 If you have an iterable that is too large to fit in memory
 in full (e.g., when dealing with large files),
 being able to take and use chunks of it at a time can be very valuable.
 Implement a generator function, chunker,
 that takes in an iterable and yields
 a chunk of a specified size at a time.
'''


def chunker(iterable, size):

    for i in range(0, len(iterable), size):
        yield iterable[i: i + size]


def iterateChunker():
    for chunk in chunker(range(25), 4):
        print(list(chunk))


def main():

    iterateUsingList()
    print("************************************")
    iterateUsingIterable()
    print("************************************")
    iterateChunker()


if __name__ == "__main__":
    main()
