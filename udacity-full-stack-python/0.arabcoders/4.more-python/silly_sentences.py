import random
from words import nouns, verbs, templates
import time


def silly_string(nouns, verbs, templates):
    # Choose a random template.
    template = random.choice(templates)

    # We'll append strings into this list for output.
    output = []

    # Keep track of where in the template string we are.
    index = 0
    noun = '{{noun}}'
    verb = '{{verb}}'
    # Add a while loop here.
    while index < len(template):
        if template[index: index + len(noun)] == noun:
            # Add a random noun to the output.
            output.append(random.choice(nouns))
            index += len(verb)
        elif template[index: index + len(verb)] == verb:
            # Add a random verb to the output.
            output.append(random.choice(verbs))
            index += len(verb)
        else:
            # Copy a character to the output.
            output.append(template[index])
            index += 1

    # After the loop has finished, join the output and return it.
    return "".join(output)


def main():
    print("Silly sentences Start ...")
    while True:
        print(silly_string(nouns, verbs, templates))
        time.sleep(2)


if __name__ == '__main__':
    main()
