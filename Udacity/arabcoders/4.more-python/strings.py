import unicodedata


def start_k(s):
    return s[0] == "K"


def too_long(s):
    # Complete this function!
    # It should return True when s is longer than 140.
    # It should return False when s is shorter than 140.
    return len(s) > 140


def adverbly(s):
    if isinstance(s, str):
        return str(s) + "ly"


def add_three():
    """
    Enter a number: 2
    Enter another number: 1
    Enter a third number: 3
    :return: 2 + 1 + 3 = 6
    """
    n1 = int(input("Enter a number: "))
    n2 = int(input("Enter another number: "))
    n3 = int(input("Enter a third number: "))
    return n1 + n2 + n3


def good_password(s):
    if isinstance(s, str):
        str_length = len(s)
        return 8 < str_length < 64


def total_length(str_list):
    if isinstance(str_list, list):
        str_length = len(str_list)
        total_str_length = 0
        for n in range(str_length):
            total_str_length += len(str_list[n])

        return total_str_length


def main():
    print("Strings")
    # Test a short string
    print("This should be False:")
    print(too_long("I'm a short string!"))

    # Test a long string
    print("This should be True:")
    print(too_long(
        "Four score and seven years ago our fathers brought forth on this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal."))

    # emoji
    print(unicodedata.lookup("snake"), end="")
    print(unicodedata.lookup("cat"), end="")
    print(unicodedata.lookup("dog"))
    print(len("🐍🐍🐍"))

    # indexing
    # A function call like this should return True:
    print(start_k("Kelly"))

    # And one like this should return False:
    print(start_k("Abe"))

    # Concatenation
    # To test your code, un-comment this print statement
    # and run the program from the terminal below:
    print(adverbly("quick"))

    print(add_three())

    # Should return 6:
    print(total_length(['foo', 'bar']))

    # Should return 0 (it's an empty list):
    print(total_length([]))

    # Should return 8:
    print(total_length(['balloons']))

    # Should return 0 (it has four empty strings):
    print(total_length(["", '', "", '']))


if __name__ == '__main__':
    main()
