import { myFunc, arr1, arr2 } from "../index"

describe("Suite Describe Function Multiply by 5", () => {
  it("expect myFunc(5) to equal 25", () => {
    expect(myFunc(5)).toEqual(25)
  })
  it("expect myFunc(8.9) to equal 45", () => {
    expect(myFunc(8.9)).toBeCloseTo(45, 0)
  })
  it("expect myFunc(5) to be less than 30", () => {
    expect(myFunc(5)).toBeLessThan(30)
  })
})

describe("Suite Describe Array Equality", () => {
  it("expect to be true when using toEqual", () => {
    expect(arr1).toEqual(arr2)
  })
  it("expect to be false when using toBe as toBe check for reference", () => {
    expect(arr1).not.toBe(arr2)
  })
})
