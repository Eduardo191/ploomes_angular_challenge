const { 
  calculateDiscount, 
  calculateGrandTotal, 
  calculateSubTotal, 
  calculateTax 
} = require('../services/calcFunctions')

test('Should calculate the discount of each product', () => {
  expect(calculateDiscount(10, 100)).toBe(10)
})

test('Should calculate grand total', () => {
  expect(calculateGrandTotal(0, 100, 10)).toBe(90)
})

test('Should calculate sub total', () => {
  expect(calculateSubTotal(10, 5)).toBe(50)
})

test('Should calculate the tax amount', () => {
  expect(calculateTax(10, 100)).toBe(10)
})

