#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sun Apr 28 16:07:07 2019

@author: melzanaty
"""

names = input(
    "Enter names of students separated by spaces : ").title().split(" ")
assignments = input(
    "Enter a list of the number of assignments separated by spaces : ").split(" ")
grades = input(
    "Enter a list of the number of grades separated by spaces : ").split(" ")

message = "Hi {},\n\nThis is a reminder that you have {} assignments left to \
submit before you can graduate. You're current grade is {} and can increase \
to {} if you submit all assignments before the due date.\n\n"


for name, assignment, grade in zip(names, assignments, grades):
    print(message.format(name, assignment, grade, int(grade) + int(assignment)*2))
