#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sun May  5 17:13:31 2019

@author: melzanaty
"""


class Parent():

    def __init__(self, last_name, eye_color):
        self.last_name = last_name
        self.eye_color = eye_color

    def show_info(self):
        return "{} is last name and {} is the eyecolor".format(self.last_name, self.eye_color)
