#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Mon Apr 29 13:31:22 2019

@author: melzanaty
"""
import useful_functions as uf


def main():

    scores = [88, 92, 79, 93, 85]
    mean = uf.mean(scores)
    curved = uf.add_five(scores)

    mean_c = uf.mean(curved)

    print("Scores:", scores)
    print("Original Mean:", mean, " New Mean:", mean_c)

    print(__name__)
    print(uf.__name__)


if __name__ == "__main__":

    main()
