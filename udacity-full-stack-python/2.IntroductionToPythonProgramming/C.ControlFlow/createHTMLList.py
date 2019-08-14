####################################################
# Quiz: Create an HTML List
####################################################
# '''
# Write some code, including a for loop, that iterates over a list of strings and creates a single string,
# html_str, which is an HTML list. For example,
# if the list is items = ['first string', 'second string'], printing html_str should output:
#        <ul>
#           <li>first string</li>
#           <li>second string</li>
#       </ul>
# '''
items = ['first string', 'second string']
html_str = "<ul>\n"
# "\ n" is the character that marks the end of the line, it does
# the characters that are after it in html_str are on the next line

for item in items:
    html_str += '<li>{}</li> \n'.format(item)

html_str += "</ul>"

print(html_str)
