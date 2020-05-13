def main():
    infile = open('values.txt', 'rt')
    outfile = open('values-totaled.txt', 'wt')
    print('Processing input')
    sum = 0
    for line in infile:
        sum += int(line)
        print(line.rstrip(), file=outfile)
    print('\nTotal: ' + str(sum), file=outfile)
    outfile.close()
    print('Output complete')

    profile = {
        'name': 'Mohammed Elzanaty',
        'age': 27,
        'job': 'Software Engineer'
    }

    # open a file for writing and creating it if does not exist
    f = open('profile.txt', 'w+')
    #  Write some line of data
    for info in profile:
        f.write(f'{info}: {profile[info]}\n')
    # close the file when done
    f.close()


if __name__ == '__main__':
    main()
