text = "this is not a reversed text"


def reverse(x):
    if isinstance(x, str):
        output = []
        for char_position in reversed(range(len(x))):
            output.append(x[char_position])
        return "".join(output)


def average(x):
    if len(x) > 3:
        return int(sum(x) / len(x))


def maximum(no_list):
    if len(no_list) > 2:
        return max(no_list)


def unique_list(l):
    output = []
    for i in range(len(l)):
        if l[i] not in output:
            output.append(l[i])
    return output


def main():
    print("the reversed text is: " + reverse('again'))

    no_list = [22, 68, 90, 78, 90, 88]
    print(average(no_list))

    no_list = [1, 2, 3, 4]
    print(maximum(no_list))

    no_list = [22, 22, 2, 1, 11, 11, 2, 2, 3, 3, 3, 4, 5, 5, 5, 55, 55, 66]
    print(unique_list(no_list))
    print(unique_list([1, 1, 1, 2, 2, 3, 3, 3, 3, 4, 5, 5, 6]))


if __name__ == '__main__':
    main()
