class Attendee:
    'Common base class for all attendees'

    def __init__(self, name, tickets):
        self.name = name
        self.tickets = tickets

    def displayAttendee(self):
        print('Name : {}, Tickets: {}'.format(self.name, self.tickets))

    def addTicket(self):
        self.tickets += 1
        print('{} tickets increased to {}'.format(self.name, self.tickets))


attendee1 = Attendee('Mohammed', 1)
attendee2 = Attendee('Hamza', 2)

attendee2.addTicket()
attendee2.addTicket()


attendee1.displayAttendee()
attendee2.displayAttendee()
