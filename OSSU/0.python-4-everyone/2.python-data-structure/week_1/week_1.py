print("Hello Week One #1")


def play_with_string():
    name = str(input("Enter Name: "))
    for index, letter in enumerate(name):
        print("{}: {}".format(index, letter))

    letter = "m"
    hasM = letter in name
    lower = name.lower()
    upper = name.upper()
    m_position = name.find(letter)
    without_spaces = name.strip()
    is_start_with = name.startswith(letter)

    print(hasM)
    print(lower)
    print(upper)
    print(m_position)
    print(without_spaces)
    print(is_start_with)
    print(type(name))
    print(dir(name))  # Method at the class str


def getHost(mail):
    at_pos = mail.find('@')
    sp_pos = mail.find(' ', at_pos)
    return mail[at_pos+1: sp_pos]


def main():

    # play_with_string()
    mail = "From stephen.marquard@uct.ac.za Sat Jan 5 09:14:16 2008"
    host = getHost(mail)
    print(host)


if __name__ == "__main__":
    main()
