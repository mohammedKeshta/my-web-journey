#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sun Apr 28 22:35:34 2019

@author: melzanaty
"""
# https://docs.python.org/3/library/turtle.html
# importing modules
import turtle


def set_turtle_charactaristics(turtle, shape, color, speed):
    turtle.shape(shape)
    turtle.color(color)
    turtle.speed(speed)


def draw_square(turtle):
    for i in range(1, 5):
        turtle.forward(100)
        turtle.right(90)


def draw_art():
    window = turtle.Screen()
    window.bgcolor("red")
    # square
    turtleNemoSquare = turtle.Turtle()
    set_turtle_charactaristics(turtleNemoSquare, "turtle", "yellow", "normal")
    # circle
    turtleNemoCircle = turtle.Turtle()
    set_turtle_charactaristics(turtleNemoCircle, "arrow", "blue", "normal")
    for i in range(0, 36):
        draw_square(turtleNemoSquare)
        turtleNemoSquare.right(5)
        turtleNemoCircle.circle(100)
        turtleNemoCircle.right(5)
    window.exitonclick()


def main():

    draw_art()


# Driver Code
if __name__ == '__main__':

    # Calling main() function
    main()
