#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sun Apr 28 19:57:52 2019

@author: melzanaty
"""
import webbrowser
import time

total_break = 3
break_count = 0

print("This program started on {}".format(time.ctime))
while break_count < total_break:
    url = "https://www.youtube.com/watch?v=keUN1H_p8MM"
    time.sleep(2*60*60)
    webbrowser.open(url)
    break_count += 1
