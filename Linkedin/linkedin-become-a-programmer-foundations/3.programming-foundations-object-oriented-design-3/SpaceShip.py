# /**
#  * SpaceShip
#  */
class SpaceShip:

    # class variables
    toughness = 0

    #  instance variables
    def __init__(self):
        self.callSign = 'useless name'
        self.__shieldStrength = 100

    #  methods
    def fireMissile(self):
        return "Pew!"

    def reduceShield(self, amount):
        self.shieldStrength -= amount

    def getShieldStrength(self):
        return self.__shieldStrength


def main():
    myShip = SpaceShip()
    print(myShip.callSign)
    myShip.toughness += 1
    myShip.toughness += 1
    SpaceShip.toughness += 5
    SpaceShip.toughness += 1
    print(myShip.toughness)
    print(SpaceShip.toughness)


if __name__ == "__main__":
    main()
