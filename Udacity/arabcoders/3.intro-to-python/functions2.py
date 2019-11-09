import turtle
import random


def star(color, sides, length, angle, distance):
    galileo = turtle.Turtle()
    galileo.color(color)  # colorful!
    galileo.width(5)  # visible!
    galileo.speed(8)  # fast!
    galileo.penup()
    galileo.left(angle)  # away from center
    galileo.forward(distance)
    galileo.pendown()  # start drawing
    for side in range(sides):
        galileo.forward(length)
        galileo.left(720 / sides)
    galileo.hideturtle()  # just the star


def start_burst():
    for angle in [180, 135, 90, 45, 0]:
        star("red", 5, 50, angle, 100)

    for angle in [180, 135, 90, 45, 0]:
        star("blue", 5, 30, angle, 60)


def polygon(sides, length):
    t = turtle.Turtle()
    t.color("lime")
    angle = 360 / sides
    for side in range(sides):
        t.forward(length)
        t.right(angle)
    t.hideturtle()


def polygon_burst():
    for sides in [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]:
        polygon(sides, 35)


def fizz(tur):
    # A red square bead.
    tur.color("red")
    tur.left(90)
    for side in [10, 20, 20, 20, 10]:
        tur.forward(side)
        tur.right(90)


def buzz(tur):
    # A green hexagonal bead.
    # Fits inside the red bead.
    tur.color("green")
    tur.left(60)
    for side in range(6):
        tur.forward(10)
        tur.right(60)
    tur.right(60)


def plain(tur):
    # A gray octagonal bead.
    tur.color("gray")
    tur.left(90)
    for side in [4, 8, 8, 8, 8, 8, 8, 8, 4]:
        tur.forward(side)
        tur.right(45)
    tur.right(45)


def fizz_buzz():
    # If the number is evenly divisible by 3, you say "Fizz"
    # If the number is evenly divisible by 5, you say "Buzz"
    # If the number is evenly divisible by both 3 and 5, you say "FizzBuzz"
    # Set up the turtle to draw beads.
    t = turtle.Turtle()
    t.speed(0)
    t.width(2)
    t.penup()
    t.back(180)  # Back up to make room!
    t.pendown()

    for num in range(16):
        if num % 3 == 0:
            buzz(t)
        elif num % 5 == 0:
            fizz(t)
        elif num % 3 == 0:
            if num % 5 == 0:
                fizz(t)
                buzz(t)
        else:
            plain(t)

        # Advance to the next bead spot.
        t.color("gray")
        t.forward(22)
    t.hideturtle()


def random_play():
    roll_dice = random.randint(1, 6)  # randint stands for "random integer"
    color = random.choice(["red", "green", "blue"])
    if roll_dice % 2 == 0:
        star(color, 5, 50, 135, 100)
    else:
        polygon(5, 35)


def main():
    print("Functions Part Two")
    # start_burst()
    # polygon_burst()
    # fizz_buzz()
    random_play()


if __name__ == '__main__':
    main()
