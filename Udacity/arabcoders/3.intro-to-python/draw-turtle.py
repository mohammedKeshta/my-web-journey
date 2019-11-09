import turtle


# Draw a star
def draw_star():
    ada = turtle.Turtle()
    ada.color("orange")
    ada.width(5)
    ada.speed(2)

    for side in range(10):
        ada.forward(150)
        ada.right(108)


# Draw a triangle
def draw_triangle():
    fred = turtle.Turtle()
    fred.color("red")
    fred.width(10)
    for side in range(2):
        fred.forward(100)
        fred.right(120)
    fred.forward(100)


# Draw a square
def draw_square():
    square = turtle.Turtle()
    square.color("purple")
    square.width(15)
    for side in range(4):
        square.forward(100)
        square.right(90)


# Draw a rectangle
def draw_rectangle():
    rectangle = turtle.Turtle()
    rectangle.color("blue")
    rectangle.width(5)
    for side in range(4):
        if side % 2 == 0:
            rectangle.forward(200)
        else:
            rectangle.forward(100)
        rectangle.right(90)


def draw_pentagon():
    pentagon = turtle.Turtle()
    pentagon.color("brown")
    pentagon.width(5)
    for side in range(5):
        pentagon.forward(100)
        pentagon.right(72)


def draw_eight_pointed():
    eight_pointed = turtle.Turtle()
    eight_pointed.color("green")
    #  A speed of 0 means that no animation takes place to show the turtle moving—instead,
    #  the turtle jumps instantly from one spot to the next.
    eight_pointed.speed(0)

    for side in range(8):
        eight_pointed.forward(100)
        eight_pointed.right(135)


def draw_game():
    game = turtle.Turtle()
    game.color("lightblue")
    for length in range(10):
        game.forward(length * 10)
        game.right(90)


def draw_arrow():
    builder = turtle.Turtle()
    builder.color("red")
    builder.width(5)
    angles = [-90, 0, 0, -90, 135, 0, 0, 0, 90, 0, 0, 0, 135, -90, 0, 0, 90, 0, 0, 0]

    for angle in angles:
        builder.right(angle)
        builder.forward(25)


def draw_hexagon():
    weaver = turtle.Turtle()
    weaver.color('orange')

    # Move back so the chain is centered.
    weaver.penup()
    weaver.back(80)
    weaver.pendown()
    weaver.speed(0)
    for link in range(20):
        # Draw a hexagon.
        for side in range(5):
            weaver.forward(side * 50)
            weaver.right(90)

        # Scoot over to the next link.
        weaver.penup()
        weaver.forward(link * 10)
        weaver.pendown()

    weaver.hideturtle()


def draw_square_corners():
    square = turtle.Turtle()
    square.color('orange')

    for side in range(4):
        # Draw a hexagon.
        for small_side in range(4):
            square.forward(10)
            square.right(90)

        # Scoot over to the next link.
        square.forward(100)
        square.right(90)

    square.hideturtle()


def draw_rainbow():
    terry = turtle.Turtle()

    rainbow = ["red", "orange", "yellow", "green", "blue", "purple"]

    for color in rainbow:
        terry.color(color)
        for side in range(5):
            terry.forward(50)
            terry.right(144)
        terry.right(60)
        terry.penup()
        terry.forward(100)
        terry.pendown()

    terry.hideturtle()


def main():
    print("Turtle")
    # draw_star()
    # draw_triangle()
    # draw_square()
    # draw_rectangle()
    # draw_pentagon()
    # draw_eight_pointed()
    # draw_game()
    # draw_arrow()
    # draw_hexagon()
    # draw_square_corners()
    draw_rainbow()


if __name__ == '__main__':
    main()
