import * as arrays from "../utilities/arrays"
import * as numbers from "../utilities/numbers"
import * as strings from "../utilities/strings"
import countries from "../utilities/fetch"

const numArr = [3, 4, 5, 6]
const wordArr = ["cat", "dog", "rabbit", "bird"]

describe("Fetch Api", () => {
  it("should get basic data on the country canada", async () => {
    const data = await countries.getCountry("canada")
    expect(data).toEqual({
      capital: "Ottawa",
      region: "Americas",
      numericCode: "124",
    })
  })

  it("should get region countries of nafta", async () => {
    const data = await countries.getRegionCountries("nafta")
    expect(data).toEqual(["Canada", "Mexico", "United States of America"])
  })

  it("should get capitals of NAFTA countries", async () => {
    const data = await countries.getRegionCapitals("nafta")
    expect(data).toEqual(["Ottawa", "Mexico City", "Washington, D.C."])
  })
})

describe("Array", () => {
  it("expect [3, 4, 5, 6] cut to be [ 3, 4, 6 ]", () => {
    expect(arrays.cut3([3, 4, 5, 6])).toEqual([3, 4, 6])
  })

  it("should capitalize a string", () => {
    expect(strings.capitalize("mohammed")).toEqual("Mohammed")
  })
  it("should be a sum greater than 10", () => {
    expect(numbers.sum(2, 12)).toBeGreaterThan(10)
  })
  it("should multiply 3 by 5 and be 15", () => {
    expect(numbers.multiply(3, 5)).toEqual(15)
  })
  it("should add numbers in array and be truthy", () => {
    expect(arrays.addArr(numArr)).toBeTruthy()
  })
  it("should concatenate 2 arrays to not equal just 1", () => {
    expect(arrays.concatArr(numArr, wordArr)).not.toEqual(numArr)
  })
  it("should not contain the third index", () => {
    expect(arrays.cut3(numArr)).not.toContain("rabbit")
  })
  it("should not have large number and be falsy", () => {
    expect(arrays.lgNum(wordArr)).toBeFalsy()
  })
})
