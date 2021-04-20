// Concatenate two arrays
export const concatArr = (
  arr1: (string | number)[],
  arr2: (string | number)[]
): (string | number)[] => {
  return [...arr1, ...arr2]
}

// Add numbers in an array

export const addArr = (arr: number[]): number => {
  let total = 0
  arr.forEach((x: number) => {
    total += x
  })
  return total
}

// Find the largest number in an array
export const lgNum = (arr: (string | number)[]): number => {
  let largest = 0 as number
  arr.forEach((x) => {
    if (x > largest) {
      largest = x as number
    }
  })
  return largest
}

// Remove the 3rd item from an array
export const cut3 = (arr: (string | number)[]): (string | number)[] => {
  arr.splice(2, 1)
  return arr
}
