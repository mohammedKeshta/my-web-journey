#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Mon Apr 29 20:47:00 2019

@author: melzanaty
"""
import requests
import re


def countdown(num):
    print('Starting')
    while num > 0:
        yield num
        num -= 1


def get_pages(link):
    links_to_visit = []
    links_to_visit.append(link)
    while links_to_visit:
        current_link = links_to_visit.pop(0)
        page = requests.get(current_link)
        for url in re.findall('<a href="([^"]+)">', str(page.content)):
            if url[0] == '/':
                url = current_link + url[1:]
            pattern = re.compile('https?')
            if pattern.match(url):
                links_to_visit.append(url)
        yield current_link


def main():

    val = countdown(5)
    print(val)  # <generator object countdown at 0x7fc4781c3390>
    next(val)   # Starting

    webpage = get_pages('https://www.google.com/')
    for result in webpage:
        print(result)


if __name__ == "__main__":
    main()
