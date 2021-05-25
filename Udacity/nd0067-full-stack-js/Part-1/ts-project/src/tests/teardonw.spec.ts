describe("A Suite", () => {
  let foo = 0
  beforeEach(() => {
    foo = 0
  })

  it("is just a function, so it can contain any code", () => {
    expect(foo + 1).toEqual(1)
  })

  describe("nested inside a second describe", () => {
    const bar = 0

    it("can reference both scopes as needed", () => {
      expect(foo).toEqual(bar)
    })
  })

  afterAll(() => {
    console.log("Completed")
  })
})
