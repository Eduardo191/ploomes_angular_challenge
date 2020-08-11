export function calculateTax(tax, subTotal) {
  return (tax * (subTotal)) / 100
}

export function calculateDiscount(discount, subTotal) {
  return (discount * (subTotal)) / 100
}

export function calculateGrandTotal(tax, subTotal, discount) {
  return (subTotal + calculateTax(tax, subTotal) - calculateDiscount(discount, subTotal))
}

export function calculateSubTotal(itemsCost, itemsQty) {
  return itemsCost * itemsQty
}