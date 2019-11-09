import turtle


def shape_factory(sides):
    shape_machine = turtle.Turtle()
    shape_machine.width(5)
    angle = 360 / sides
    for side in range(sides):
        shape_machine.forward(100)
        shape_machine.right(angle)


def spirangle(sides):
    t = turtle.Turtle()
    for side in range(sides):
        t.forward(side * 10)
        t.right(120)


def spiral(sides, angle):
    t = turtle.Turtle()
    for side in range(sides):
        t.forward(side)
        t.right(angle)


# Write a function here that creates a
# turtle and draws a shape with it.
def triangle_boogie(color, start):
    t = turtle.Turtle()
    t.speed(0)
    t.right(start)
    for shape in range(6):
        if shape % 2 == 0:
            t.color("purple")
            t.width(shape)
        else:
            t.color(color)
            t.width(shape)
        for side in range(3):
            t.forward(100)
            t.right(120)
        t.right(15)
    t.hideturtle()


def bead(tur):
    for _ in range(12):
        tur.forward(10)
        tur.left(30)


def draw_beads():
    t = turtle.Turtle()
    t.width(2)
    t.speed(0)
    t.penup()
    t.back(150)
    t.pendown()
    # Draw ten beads.
    for n in range(10):
        if n % 2:
            t.color("blue")
        else:
            t.color("red")
        bead(t)
        t.forward(40)


def draw_staircase():
    t = turtle.Turtle()
    t.width(2)
    t.penup()
    t.back(150)
    t.pendown()
    for side in range(20):
        if side % 2 == 0:
            t.right(90)
        else:
            t.left(90)
        t.forward(10)


def main():
    print("Functions")
    # draw triangle
    # shape_factory(3)
    # draw square
    # shape_factory(4)
    # draw pentagon
    # shape_factory(5)
    # draw spirangle
    # spirangle(19)
    # draw spiral
    # spiral(100, 45)

    # Call the function multiple times.
    # triangle_boogie("red", 0)
    # triangle_boogie("orange", 120)
    # triangle_boogie("blue", 240)

    # draw_beads()

    draw_staircase()


if __name__ == '__main__':
    main()
