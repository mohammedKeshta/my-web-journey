# 1
str1 = "Hello"
str2 = 'there'
bob = str1 + str2
print(bob)  # Hellothere


# 2
x = '40'
y = int(x) + 2
print(y)  # 42

# 3
x = 'From marquard@uct.ac.za'
print(x[8])  # q

# 4
print(x[14:17])

# 5
for letter in 'banana':
    print(letter)

# 6
print(len('banana')*7)

# 7
greet = 'Hello Bob'
print(greet.upper())  # HELLO BOB

# 9
data = 'From stephen.marquard@uct.ac.za Sat Jan  5 09:14:16 2008'
pos = data.find('.')
print(data[pos:pos+3])
