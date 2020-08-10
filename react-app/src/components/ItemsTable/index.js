import React, { useState } from 'react'
import { useSelector } from 'react-redux'

export default function ItemsTable() {
  const [itemsQty, setItemsQty] = useState(0)
  const [itemsDescription, setItemsDescription] = useState('')
  const [itemsCost, setItemsCost] = useState(0)
  const [itemsArray, setItemsArray] = useState([])
  const [tax, setTax] = useState(0)
  const symbol = useSelector((state) => state)

  function removeItem(item) {
    itemsArray.splice(itemsArray.indexOf(item), 1)
  }

  function calculateTax() {
    return (tax * itemsCost) / 100
  }

  function calculateGrandTotal() {
    return (calculateTax()) + (itemsCost * itemsQty)
  }

  function calculateSubTotal() {
    return itemsCost * itemsQty
  }

  return (
    <div className="items-table">
      <div className="row header">
        <div className="col-xs-1">&nbsp;</div>
        <div className="col-xs-5">Description</div>
        <div className="col-xs-2">Quantity</div>
        <div className="col-xs-2">Cost {symbol}</div>
        <div className="col-xs-2 text-right">Total</div>
      </div>
      <div className="row invoice-item" ng-repeat="item in invoice.items" ng-animate="'slide-down'">
        <div className="col-xs-1 remove-item-container">
          <a href ng-hide="printMode" className="btn btn-danger">[X]</a>
        </div>
        <div className="col-xs-5 input-container">
          <input 
            value={itemsDescription} 
            onChange={(e) => setItemsDescription(e.target.value)} 
            placeholder="Description" 
          />
        </div>
        <div className="col-xs-2 input-container">
          <input 
            onChange={(e) => setItemsQty(e.target.value)} 
            value={itemsQty} 
            size="4" 
            placeholder="Quantity" 
          />
        </div>
        <div className="col-xs-2 input-container">
          <input 
            onChange={(e) => setItemsCost(e.target.value)} 
            value={itemsCost} 
            size="6" 
            placeholder="Cost" 
          />
        </div>
        <div className="col-xs-2 text-right input-container">
          {`${symbol}${calculateSubTotal()}`}
        </div>
      </div>
      <div className="row invoice-item">
        <div className="col-xs-12 add-item-container" ng-hide="printMode">
          <a className="btn btn-primary" href ng-click="addItem()" >[+]</a>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-10 text-right">Sub Total</div>
        <div className="col-xs-2 text-right">{`${symbol}${calculateSubTotal()}`}</div>
      </div>
      <div className="row">
        <div className="col-xs-10 text-right" id="tax_input">
          Tax(%): <input value={tax} onChange={(e) => setTax(e.target.value)} />
        </div> 
        <div className="col-xs-2 text-right">{`${symbol}${calculateTax()}`}</div>
      </div>
      <div className="row">
        <div className="col-xs-10 text-right">Grand Total:</div>
        <div className="col-xs-2 text-right">{`${symbol}${calculateGrandTotal()}`}</div>
      </div>
    </div>
  )
}