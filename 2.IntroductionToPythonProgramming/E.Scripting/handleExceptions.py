#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Mon Apr 29 12:06:37 2019

@author: melzanaty
"""


def get_int_input():
    while True:
        try:
            number = int(input("Enter Number: "))
            print("number is : {}".format(number))
            break
        except ValueError:
            print("Not a valid Number")
        except KeyboardInterrupt:
            print("No Input Taken")
        finally:
            print("Appriciated")
        print("Attemped Input")


def party_planner(cookies, people):
    leftovers = None
    num_each = None
    try:
        num_each = cookies // people
        leftovers = cookies % people
        print("num_each {}, and leftovers {}".format(num_each, leftovers))
    except ZeroDivisionError as e:
        print("Oops, you entered 0 people will be attending.")
        print("Please enter a good number of people for a party.")
        print("ZeroDivisionError occurred: {}".format(e))


def main():

    party_planner(13, 0)
    party_planner(13, 2)


# Driver Code
if __name__ == '__main__':

    # Calling main() function
    main()
