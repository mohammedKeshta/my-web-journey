from dog_class import Dog
from pets_class import Pets


def get_biggest_number(*args):
    return max(args)


def main():
    # Instantiate the Dog object
    philo = Dog('Philo', 5)
    mikey = Dog('Mikey', 6)
    jake = Dog("Jake", 7)
    doug = Dog("Doug", 4)
    william = Dog("William", 2)

    my_dogs = [philo, mikey, jake, doug, william]

    # Access the instance attributes
    print('{} is {} and {} is {}'.format(
        philo.name, philo.age, mikey.name, mikey.age))
    # Is Philo a mammal?
    if philo.species == "mammal":
        print("{0} is a {1}!".format(philo.name, philo.species))
    # Get The oldest dog
    print("The oldest dog is {} years old.".format(
        get_biggest_number(jake.age, doug.age, william.age)))
    # call our instance methods
    print(mikey.description())
    print(mikey.speak("Gruff Gruff"))

    my_pets = Pets(my_dogs)
    print('I have {} dogs.'.format(len(my_pets.dogs)))
    for dog in my_pets.dogs:
        print("{} is {}.".format(dog.name, dog.age))

    print("And they're all {}s, of course.".format(dog.species))

    are_my_dogs_hungry = False

    for dog in my_pets.dogs:
        dog.eat()
        if dog.is_hungry:
            are_my_dogs_hungry = True

    if are_my_dogs_hungry:
        print("My dogs are hungry.")
    else:
        print("My dogs are not hungry.")


if __name__ == "__main__":
    main()
