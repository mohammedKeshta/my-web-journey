####################################################
# Quiz: Create Usernames
####################################################
# '''
# Write a for loop that iterates over the names list to create a usernames list.
# To create a username for each name,
# make everything lowercase and replace spaces with underscores. Running your for loop over the list:
# '''
names = ["Joey Tribbiani", "Monica Geller", "Chandler Bing", "Phoebe Buffay"]
user_names = []

for name in names:
    user_names.append(name.lower().replace(' ', '_'))

print(user_names)

####################################################
# Quiz: Modify Usernames with Range
####################################################
# '''
# Write a for loop that uses range() to iterate over the positions in usernames to modify the list.
# Like you did in the previous quiz,
# change each name to be lowercase and replace spaces with underscores.
# '''
usernames = ["Joey Tribbiani", "Monica Geller", "Chandler Bing", "Phoebe Buffay"]
for index in range(len(usernames)):
    usernames[index] = usernames[index].lower().replace(' ', '_')

print(usernames)