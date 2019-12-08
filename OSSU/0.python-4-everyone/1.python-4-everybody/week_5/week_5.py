print('hello world week #5')

x = int(input("Enter Number: "))
if x < 2:
    print('Below 2')
elif x >= 2:
    print('Two or more')
else:
    print('Something else')


aStr = "Hello Mohammed";
try: 
    iStr = int(aStr)
except: 
    iStr = -1

print('First', iStr);

aStr = "123"
try: 
    iStr = int(aStr)
except: 
    iStr = -1

print('Second', iStr);
