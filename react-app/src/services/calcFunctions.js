function calculateTax(tax, subTotal) {
  return (tax * (subTotal)) / 100
}

function calculateDiscount(discount, subTotal) {
  return (discount * (subTotal)) / 100
}

function calculateGrandTotal(tax, subTotal, discount) {
  return (subTotal + calculateTax(tax, subTotal) - calculateDiscount(discount, subTotal))
}

function calculateSubTotal(itemsCost, itemsQty) {
  return itemsCost * itemsQty
}

module.exports = {
  calculateTax,
  calculateDiscount,
  calculateGrandTotal,
  calculateSubTotal
}