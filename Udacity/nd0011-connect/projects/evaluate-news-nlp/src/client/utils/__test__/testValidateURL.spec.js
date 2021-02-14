// Import the js file to test
import isURLValid from '../validateURL'

describe('Testing the ValidateURL functionality', () => {
  test('Testing the isURLValid() function', () => {
    expect(isURLValid).toBeDefined()
  })

  test('it return false for invalid urls', () => {
    const urls = ['mohammedelzanaty/path', 'query=mohammedelzanaty']

    urls.forEach((url) => {
      expect(isURLValid(url)).toBeFalsy()
    })
  })

  test('it returns true for valid urls', () => {
    const urls = [
      'https://example.com',
      'http://example.com',
      'example.com',
      'example.com/mohammedelzanaty',
      'example.com/mohammedelzanaty/path',
      'example.com?query=mohammedelzanaty',
    ]

    urls.forEach((url) => {
      expect(isURLValid(url)).toBeTruthy()
    })
  })
})
