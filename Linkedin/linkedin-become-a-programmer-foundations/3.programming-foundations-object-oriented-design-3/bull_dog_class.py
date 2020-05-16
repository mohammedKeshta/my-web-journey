from dog_class import Dog

class Bulldog(Dog):
    
    def run(self, speed):
        return "{} runs {}".format(self.name, speed)