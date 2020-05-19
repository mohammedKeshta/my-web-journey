# https://realpython.com/linked-lists-python/

class Node:

    def __init__(self, data):
        self.data = data
        self.next = None

    def get_data(self):
        return self.data

    def set_data(self, data):
        self.data = data

    def get_next(self):
        return self.next

    def set_next(self, next):
        self.next = next

    def __repr__(self):
        return self.data


class LinkedList:

    def __init__(self):
        self.head = None
        self.count = 0

    def get_count(self):
        return self.count

    def insert(self, data):
        new_node = Node(data)
        new_node.set_next(self.head)
        self.head = new_node
        self.count += 1

    def __repr__(self):
        node = self.head
        nodes = []
        while node is not None:
            nodes.append(node.get_data())
            node = node.get_next()
        nodes.append("None")
        return " -> ".join(nodes)


list = LinkedList()

print('*********************')
print('List: {}'.format(list))
print('Count {}'.format(list.get_count()))
print('*********************')
list.insert('a')
list.insert('b')
list.insert('c')
print('List: {}'.format(list))
print('Count {}'.format(list.get_count()))
print('*********************')
