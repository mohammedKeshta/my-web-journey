####################################################
# Quiz: len, max, min, and Lists
####################################################

a = [1, 5, 8]
b = [2, 6, 9, 10]
c = [100, 200]

print(max([len(a), len(b), len(c)])) # 4
print(min([len(a), len(b), len(c)])) # 2


####################################################
# Quiz: sorted, join, and Lists
####################################################

names = ["Carol", "Albert", "Ben", "Donna"]
print(" & ".join(sorted(names))) # Albert & Ben & Carol & Donna

####################################################
# Quiz: append and Lists
####################################################

names.append("Eugenia")
print(sorted(names)) # ['Albert', 'Ben', 'Carol', 'Donna', 'Eugenia']

