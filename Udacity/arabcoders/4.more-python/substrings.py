def is_substring(sub_str, str):
    is_sub = False
    for i in range(len(str)):
        if str[i: len(sub_str) + i] == sub_str:
            is_sub = True
            break
    return is_sub


def count_character(string, target):
    index = 0
    total = 0
    while index < len(string):
        if string[index] == target:
            total += 1
        index += 1
    return total


def count_substring(string, target):
    index = 0
    total = 0
    while index < len(string):
        if string[index: index + len(target)] == target:
            total += 1
            index += len(target)
        else:
            index += 1
    return total


def breakify(lines):
    return "<br>".join(lines)


def main():
    print("subStrings")
    # This one should return False
    print(is_substring('bad', 'abracadabra'))

    # This one should return True
    print(is_substring('dab', 'abracadabra'))

    # Here's a call you can test it with. This should print 4:
    print(count_substring('love, love, love, all you need is love', 'love'))
    print(count_substring('AAAA', 'AA'))

    lines = ["Haiku frogs in snow",
             "A limerick came from Nantucket",
             "Tetrametric drum-beats thrumming, Hiawathianic rhythm."]

    print(breakify(lines))


if __name__ == '__main__':
    main()
