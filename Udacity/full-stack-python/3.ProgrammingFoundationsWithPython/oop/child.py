#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sun May  5 17:14:59 2019

@author: melzanaty
"""
import parent


class Child(parent.Parent):

    def __init__(self, last_name, eye_color, number_of_toys):
        parent.Parent.__init__(self, last_name, eye_color)
        self.number_of_toys = number_of_toys
    
    def show_info(self):
        return "{} is last name and {} is the eyecolor with {} toys".format(self.last_name, self.eye_color, self.number_of_toys)

