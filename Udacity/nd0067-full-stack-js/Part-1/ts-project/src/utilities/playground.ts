export function playground() {
  console.log("Type Script Lesson")
  let person: string = "Mohammed Elzanaty"
  // number
  let myNumber: number = 5
  // string
  let studentName: string
  studentName = "Dae Lee"
  // boolean
  let studentEnriched: boolean
  studentEnriched = true
  // union type
  let studentPhone: number | string
  studentPhone = "(555) 555 - 5555"
  studentPhone = 5555555555

  // arrays
  const myArr1: number[] = [1, 2, 3]
  const myArr2: (number | string)[] = [1, "Cat", "Dog", 7]

  // tuples
  const student: [string, number, string, string] = [
    "Mohammed",
    12,
    "math",
    "male",
  ]

  // Enum
  enum Compass {
    North,
    South,
    East,
    West,
  }

  // objects / interfaces
  interface Person {
    readonly id: number
    name: string
  }

  interface Student extends Person {
    enrolled: boolean
    phone?: string | number
  }

  const stud1: Student = {
    id: 1,
    name: "Mohammed",
    enrolled: true,
  }

  // classes and factory function
  class StudentClass {
    protected studentGrade: number
    private readonly studentId: number

    constructor(grade: number, id: number) {
      this.studentGrade = grade
      this.studentId = id
    }

    getId() {
      return this.studentId
    }
  }

  class Graduate extends StudentClass {
    studentMajor: string // public by default
    public constructor(grade: number, id: number, major: string) {
      super(grade, id)
      // this.studentId = id; // TypeScript Error: Property 'studentId' is private and only accessible within class 'Student'.
      this.studentGrade = grade // Accessible because parent is protected
      this.studentMajor = major
    }
  }

  const studentC = new Graduate(3, 1234, "computer science")

  // functions
  const createPerson = (person: string) => `Hello, ${person}`

  const squared = (num: number): number => num * num

  const getCapitals = (str: string): string[] | null => str.match(/[A-Z]/)

  const greeting = (name: string): void => {
    console.log(`Hello, ${name}`)
  }

  function handleError(err: string): never {
    throw new Error("Whoops! error")
  }

  const getPhone = (phone: number | string): any => phone

  const move = (dist: number, direction: Compass) =>
    `walk ${dist} paces ${direction}`

  console.group("Logs")
  greeting("Mohammed")
  console.log(createPerson(person))
  console.log(squared(myNumber))
  console.log(getCapitals("zanaty"))
  console.log(getCapitals("Zanaty"))
  console.log(getPhone(studentPhone))
  console.log(move(1, Compass.East))
  console.log(stud1)
  console.log(studentC)
  console.log(`Student Id ${studentC.getId()}`)
  console.groupEnd()
}
