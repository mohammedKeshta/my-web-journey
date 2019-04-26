####################################################
# Quiz: Average Electricity Bill
####################################################
"""
My electricity bills for the last three months have been $23, $32 and $64.
What is the average monthly electricity bill over the three month period?
Write an expression to calculate the mean, and use print() to view the result.
"""
average = (23 + 32 + 64) / 3
print(str(average) + '$')

####################################################
# Quiz: Calculate
####################################################
"""
In this quiz you're going to do some calculations for a tiler. Two parts of a floor need tiling.
One part is 9 tiles wide by 7 tiles long, the other is 5 tiles wide by 7 tiles long. Tiles come in packages of 6.

How many tiles are needed?
You buy 17 packages of tiles containing 6 tiles each. How many tiles will be left over?
"""
# Fill this in with an expression that calculates how many tiles are needed.
print(9 * 7 + 5 * 7)

# Fill this in with an expression that calculates how many tiles will be
# left over.
print(17 * 6 - (9 * 7 + 5 * 7))

####################################################
# Quiz: Assign and Modify Variables
####################################################
# The current volume of a water reservoir (in cubic metres)
reservoir_volume = 4.445e8
# The amount of rainfall from a storm (in cubic metres)
rainfall = 5e6

# decrease the rainfall variable by 10% to account for runoff
rainfall *= 0.9
# add the rainfall variable to the reservoir_volume variable
reservoir_volume += rainfall
# increase reservoir_volume by 5% to account for stormwater that flows
# into the reservoir in the days following the storm
reservoir_volume += reservoir_volume * 0.05
# decrease reservoir_volume by 5% to account for evaporation
reservoir_volume -= reservoir_volume * 0.05
# subtract 2.5e5 cubic metres from reservoir_volume to account for water
# that's piped to arid regions.
reservoir_volume -= 2.5e5
# print the new value of the reservoir_volume variable
print(reservoir_volume)

####################################################
# Quiz: Changing Variable Values
####################################################
carrots = 24
rabbits = 8
crs_per_rab = carrots / rabbits
rabbits = 12
print(crs_per_rab)

####################################################
# Quiz: Which is denser, Rio or San Francisco?
####################################################

sf_population, sf_area = 864816, 231.89
rio_population, rio_area = 6453682, 486.5

san_francisco_pop_density = sf_population / sf_area
rio_de_janeiro_pop_density = rio_population / rio_area

# Write code that prints True if San Francisco is denser than Rio, and
# False otherwise
print(san_francisco_pop_density > rio_de_janeiro_pop_density)

####################################################
# Quiz: Fix the Quote
####################################################
# TODO: Fix this string!
# ford_quote = 'Whether you think you can, or you think you can't--you're
# right.'
ford_quote = 'Whether you think you can, or you think you can\'t--you\'re right.'
print(ford_quote)

####################################################
# Quiz: Write a Server Log Message
####################################################
username = "Kinari"
timestamp = "04:50"
url = "http://petshop.com/pets/mammals/cats"

# TODO: print a log message using the variables above.
# The message should have the same format as this one:
# "Yogesh accessed the site http://petshop.com/pets/reptiles/pythons at 16:20."
message = username + " accessed the site " + url + " at " + timestamp + "."
print(message)

####################################################
# Quiz: len()
####################################################
given_name = "William"
middle_names = "Bradley"
family_name = "Pitt"

full_name = given_name + " " + middle_names + " " + family_name
name_length = len(full_name)

# name_length = len(given_name) + len(middle_names) + len(family_name) + 2

# Now we check to make sure that the name fits within the driving license character limit
# Nothing you need to do here
driving_license_character_limit = 28
print(name_length <= driving_license_character_limit)


####################################################
# Quiz: What Type Do These Objects Have?
####################################################


def getType(variable):


print(type(variable))

getType("12")  # <type 'str'>
getType(12.3)  # <type 'float'>
getType(len("my_string"))  # <type 'int'>
getType("hippo" * 12)  # <type 'str'>

####################################################
# Quiz: Total Sales
####################################################

mon_sales = "121"
tues_sales = "105"
wed_sales = "110"
thurs_sales = "98"
fri_sales = "95"

weekly_sales = int(mon_sales) + int(tues_sales) + \
               int(wed_sales) + int(thurs_sales) + int(fri_sales)
weekly_sales = str(weekly_sales)  # convert the type back!!
print("This week's total sales: " + weekly_sales)

# String Method Playground
# Browse the complete list of string methods at:
# https://docs.python.org/3/library/stdtypes.html#string-methods
# and try them out here

name = "mohammed elzanaty"
print(name.swapcase())
print(name.endswith("y"))
print(name.startswith("moh"))
print(name.split(' '))
print(name.replace("mo", "mu"))
print(name.capitalize())

####################################################
# Quiz: String Methods Coding Practice
####################################################
verse = "If you can keep your head when all about you\n  Are losing theirs and blaming it on you,\n If you can trust yourself when all men doubt you,\n  But make allowance for their doubting too;\nIf you can wait and not be tired by waiting,\n  Or being lied about, don’t deal in lies,\nOr being hated, don’t give way to hating,\n  And yet don’t look too good, nor talk too wise:"

"""
What is the length of the string variable verse?
What is the index of the first occurrence of the word 'and' in verse?
What is the index of the last occurrence of the word 'you' in verse?
What is the count of occurrences of the word 'you' in the verse?
"""
print(verse, "\n")

print("Verse has a length of {} characters.".format(len(verse)))
print(
    "The first occurence of the word 'and' occurs at the {}th index.".format(
        verse.find('and')))
print(
    "The last occurence of the word 'you' occurs at the {}th index.".format(
        verse.rfind('you')))
print("The word 'you' occurs {} times in the verse.".format(verse.count('you')))
