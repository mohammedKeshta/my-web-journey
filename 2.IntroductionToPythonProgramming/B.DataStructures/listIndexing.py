####################################################
# Quiz: List Indexing
####################################################
"""
 Determine how many days are in a particular month based on the integer variable month,
 and store that value in the integer variable num_days.
 For example,
  if month is 8,
    num_days should be set to 31, since the eighth month, August, has 31 days.
"""
month = 8
days_in_month = [31,28,31,30,31,30,31,31,30,31,30,31]

num_days = days_in_month[month-1]
print(num_days)
