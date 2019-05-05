#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Wed May  1 21:21:31 2019

@author: melzanaty
"""
import urllib.request


def check_profanity(content):

    try:
        url = "http://www.wdylike.appspot.com/?q=" + content
        connection = urllib.request.Request(url)
        connection = urllib.request.urlopen(url, timeout=1000000000)
        output = connection.read()
        connection.close()
        return output

    except Exception as e:
        print("Connection Failed becuase {}".format(e))


def read_file():

    file_location = "movie_quotes.txt"
    with open(file_location, "r") as quotes:
        content_of_file = quotes.read()
        quotes.close()
    return content_of_file


def main():

    hasProfanity = check_profanity(read_file())
    if hasProfanity is not None:
        if hasProfanity == 'true':

            print("File contain Profanity words")
        else:

            print("File NOT contain Profanity words")


if __name__ == "__main__":

    main()
