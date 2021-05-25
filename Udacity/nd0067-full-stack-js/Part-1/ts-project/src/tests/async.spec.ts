import countries from "../async"

describe("Async Test", () => {
  it("should get basic data on the country canada", async () => {
    const data = await countries.getCountry("canada")
    expect(data).toEqual({
      capital: "Ottawa",
      region: "Americas",
      numericCode: "124",
    })
  })

  it("should get region countries of nafta", async () => {
    const data = await countries.getRegionCountries("NAFTA")
    expect(data).toEqual(["Canada", "Mexico", "United States of America"])
  })

  it("should get capitals of NAFTA countries", async () => {
    const data = await countries.getRegionCapitals("nafta")
    expect(data).toEqual(["Ottawa", "Mexico City", "Washington, D.C."])
  })
})
