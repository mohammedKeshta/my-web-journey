# bad
# t = end_time - start  # compute execution time
# c = category(t)  # get category of task
# print('Task Duration: {} seconds, Category: {}'.format(t, c)


# better
execution_time = end_time - start_time
category = categorize_task(execution_time)
print('Task Duration: {} seconds, Category: {}'.format(execution_time, category)
