from time import sleep


def total_length(str_list):
    if isinstance(str_list, list):
        str_length = len(str_list)
        total_str_length = 0
        for n in range(str_length):
            total_str_length += len(str_list[n])

        return total_str_length


def find_512():
    for x in range(100):
        for y in range(100):
            if x * y == 512:
                return print(f"{x} * {y} == 512")


# While Loop
def check_password():
    while input("Enter a password: ") != 'mohammedelzanaty':
        print("Wrong, please try ago")
    print("Okay, come on in.")


def main():
    print("Lists")

    # Should return 6:
    print(total_length(['foo', 'bar']))

    # Should return 0 (it's an empty list):
    print(total_length([]))

    # Should return 8:
    print(total_length(['balloons']))

    # Should return 0 (it has four empty strings):
    print(total_length(["", '', "", '']))

    # check_password()

    # for i in reversed(range(11)):
    #     if i != 0:
    #         print(i)
    #         sleep(1)
    # print("Blastoff!")

    find_512()


if __name__ == '__main__':
    main()
