#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sat Apr 27 11:03:13 2019

@author: melzanaty
"""

####################################################
# Quiz: Break the String
####################################################
# '''
# Write a loop with a break statement to create a string, news_ticker, that is exactly 140 characters long.
# You should create the news ticker by adding headlines from the headlines list,
# inserting a space in between each headline. If necessary, truncate the last headline 
# in the middle so that news_ticker is exactly 140 characters long.
# '''

def word_counter(word):
    result = 0 
    for letter in word:
        result += 1
    return result


headlines = ["Local Bear Eaten by Man",
             "Legislature Announces New Laws",
             "Peasant Discovers Violence Inherent in System",
             "Cat Rescues Fireman Stuck in Tree",
             "Brave Knight Runs Away",
             "Mohammed Elzanaty Write it",
             "Papperbok Review: Totally Triffic"]

news_ticker = ''
for sentence in headlines: 
    news_ticker += sentence + ' ' 
    if len(news_ticker) > 140: 
        news_ticker = news_ticker[0:140]
        break;
    
        
print(news_ticker)