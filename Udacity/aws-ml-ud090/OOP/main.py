from shirt import Shirt


def main():

    shirt_one = Shirt('red', 'S', 'short-sleeve', 15)
    shirt_two = Shirt('yellow', 'M', 'long-sleeve', 20)

    print(shirt_one.get_price())
    # change price of shirt one to 30
    shirt_one.set_price(30)
    print(shirt_one.get_price())

    # print shirt two color
    print(shirt_two.get_color())


if __name__ == "__main__":
    main()
