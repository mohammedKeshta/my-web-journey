####################################################
# Quiz: Which Prize
####################################################
"""
  a competitor know which of these prizes they won based on the number of points they scored, which is stored in the integer variable points.


    Points	        |     Prize
    ----------------|-------------
    1 - 50          |     wooden rabbit
    51 - 150        |	    no prize
    151 - 180	    |     wafer-thin mint
    181 - 200	    |     penguin
"""
points = 2  # use this input to make your submission
result = ''
messages = ['wooden rabbit', 'no prize', 'wafer-thin min', 'penguin']

if points < 200:
    if points <= 50:
        result = 'Congratulations! You won a {}!'.format(messages[0])
    elif points <= 150:
        result = 'Congratulations! You won a {}!'.format(messages[1])
    elif points <= 180:
        result = 'Congratulations! You won a {}!'.format(messages[2])
    elif points <= 200:
        result = 'Congratulations! You won a {}!'.format(messages[3])
    else:
        result = 'Oh dear, no prize this time.'
print(result)