export const sortFunc = (a, b) => {
  if (a < b) return -1
  if (a > b) return 1
  return 0
}

export const reverseSortFunc = (a, b) => {
  if (a > b) return -1
  if (a < b) return 1
  return 0
}

export const getSortedByMixedStringAndNumberField = (arr, fieldName, reverse) => {
  let sortedArray = arr.sort((a, b) =>
    a[fieldName].localeCompare(b[fieldName], undefined, { numeric: true })
  )

  if (reverse) sortedArray = sortedArray.reverse()

  return sortedArray
}

export const getSortedByStringField = (arr, fieldName, reverse) => {
  // array of objects; field to sorting must be typeof string
  return arr.sort((a, b) => {
    const aName = a[fieldName].toLowerCase()
    const bName = b[fieldName].toLowerCase()

    if (reverse) {
      return reverseSortFunc(aName, bName)
    }

    return sortFunc(aName, bName)
  })
}

export const getSortedByNumField = (arr, fieldName, reverse) => {
  return arr.sort((a, b) => {
    const aName = a[fieldName]
    const bName = b[fieldName]

    if (reverse) {
      return reverseSortFunc(aName, bName)
    }

    return sortFunc(aName, bName)
  })
}

export const capitalizeFirstLetter = str => {
  if (!str) {
    return ''
  }
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export const roundToTwoDecimal = n => {
  return Math.round(n * 100) / 100
}

export const roundToOneDecimal = n => {
  return Math.round(n * 10) / 10
}

export const isBottom = el => {
  const elTop = el.scrollTop
  const elHeight = el.scrollHeight
  const elOffset = el.offsetHeight
  return elTop > elHeight - elOffset - 1
}
