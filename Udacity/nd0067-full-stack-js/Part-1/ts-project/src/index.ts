import * as arrays from "./utilities/arrays"
import * as numbers from "./utilities/numbers"
import * as strings from "./utilities/strings"
import { main } from "./utilities/generics"
import _ from "lodash"

const numArr = [3, 4, 5, 6]
const wordArr = ["cat", "dog", "rabbit", "bird"]
const arrSum = arrays.addArr(numArr)
const mixArr = arrays.concatArr(numArr, wordArr)
const myNum = (("15" as unknown) as number) % 2

// results of function calls
console.log(arrays.cut3(mixArr))
console.log(numbers.sum(arrSum, myNum))
console.log(strings.capitalize("the quick brown fox"))
console.log(numbers.multiply(parseInt("5"), 8))
console.log(arrays.lgNum(mixArr))

// run generics
// main()

// third party
console.log(_.dropRight([1, 2, 3, 4, 5], 2))
console.log(_.dropRight(["cat", "dog", "rabbit", "horse"], 1))
console.log(_.multiply(1, 2))
