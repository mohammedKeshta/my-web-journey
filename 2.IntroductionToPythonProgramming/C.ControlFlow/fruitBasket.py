####################################################
# Quiz: Fruit Basket - Task 1
####################################################
# You would like to count the number of fruits in your basket.
# In order to do this, you have the following dictionary and list of
# fruits.  Use the dictionary and list to count the total number
# of fruits, but you do not want to count the other items in your basket.


def iterate_through_dict(dict, list):
    item_counter = 0
    for key, value in dict.items():
        if key in list:
            item_counter += value
    return item_counter


result = 0
basket_items = {'apples': 4, 'oranges': 19, 'kites': 3, 'sandwiches': 8}
fruits = ['apples', 'oranges', 'pears', 'peaches', 'grapes', 'bananas']

result = iterate_through_dict(basket_items, fruits)
print(result)  # 23

####################################################
# Quiz: Fruit Basket - Task 2
####################################################
# Example 1

result = 0
basket_items = {'pears': 5, 'grapes': 19, 'kites': 3, 'sandwiches': 8, 'bananas': 4}
fruits = ['apples', 'oranges', 'pears', 'peaches', 'grapes', 'bananas']

result = iterate_through_dict(basket_items, fruits)
print(result)  # 28

# Example 2

result = 0
basket_items = {'peaches': 5, 'lettuce': 2, 'kites': 3, 'sandwiches': 8, 'pears': 4}
fruits = ['apples', 'oranges', 'pears', 'peaches', 'grapes', 'bananas']

result = iterate_through_dict(basket_items, fruits)
print(result)  # 9

# Example 3

result = 0
basket_items = {'lettuce': 2, 'kites': 3, 'sandwiches': 8, 'pears': 4, 'bears': 10}
fruits = ['apples', 'oranges', 'pears', 'peaches', 'grapes', 'bananas']

result = iterate_through_dict(basket_items, fruits)
print(result)  # 4

####################################################
# Quiz: Fruit Basket - Task 3
####################################################
# You would like to count the number of fruits in your basket.
# In order to do this, you have the following dictionary and list of
# fruits.  Use the dictionary and list to count the total number
# of fruits and not_fruits.

fruit_count, not_fruit_count = 0, 0
basket_items = {'apples': 4, 'oranges': 19, 'kites': 3, 'sandwiches': 8}
fruits = ['apples', 'oranges', 'pears', 'peaches', 'grapes', 'bananas']

for key in basket_items:
    if key in fruits:
        fruit_count += 1
    else:
        not_fruit_count += 1

print(fruit_count, not_fruit_count) # 2 2
