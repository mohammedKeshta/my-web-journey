class Shirt():
    def __init__(self, shirt_color, shirt_size, shirt_style, shirt_price):
        self._color = shirt_color
        self._size = shirt_size
        self._style = shirt_style
        self._price = shirt_price

    def get_color(self):
        return self._color

    def set_color(self, new_color):
        self._color = new_color

    def get_size(self):
        return self._size

    def set_size(self, new_size):
        self._size = new_size

    def get_style(self):
        return self._style

    def set_style(self, new_style):
        self._style = new_style

    def get_price(self):
        return self._price

    def set_price(self, new_price):
        self._price = new_price

    def discount(self, discount):
        return self._price * (1 - discount)
