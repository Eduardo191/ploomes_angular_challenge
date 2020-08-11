import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import RowItem from '../RowItem'

export default function ItemsTable() {
  const [tax, setTax] = useState(0)
  const [discount, setDiscount] = useState(0)
  const symbol = useSelector((state) => state.currencySymbol)
  const subTotal = useSelector((state) => state.subTotal)
  const existingItems = useSelector((state) => state.existingItems)
  const printMode = useSelector((state) => state.printMode)
  const dispatch = useDispatch()

  function calculateTax() {
    return (tax * (subTotal)) / 100
  }

  function calculateGrandTotal() {
    return (subTotal + calculateTax() - calculateDiscount())
  }

  function calculateDiscount() {
    return (discount * (subTotal)) / 100
  }

  function addItem() {
    dispatch({ type: 'ADD_ITEM', item: (existingItems[existingItems.length - 1] + 1) })
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
      {
        existingItems.map((item) => <RowItem key={item} />)
      }
      <div className="row invoice-item" id={ printMode ? "plus_button" : "" }>
        <div className="col-xs-12 add-item-container" ng-hide="printMode">
          <a className="btn btn-primary" href onClick={addItem} >[+]</a>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-10 text-right">Sub Total</div>
        <div className="col-xs-2 text-right">{`${symbol}${subTotal}`}</div>
      </div>
      <div className="row">
        <div className="col-xs-10 text-right">
          Tax(%): <input value={tax} id="tax_input" onChange={(e) => setTax(e.target.value)} />
        </div> 
        <div className="col-xs-2 text-right">{`${symbol}${calculateTax()}`}</div>
        <div className="col-xs-10 text-right">
          Discount(%): <input value={discount} id="discount_input" onChange={(e) => setDiscount(e.target.value)} />
        </div>
        <div className="col-xs-2 text-right">{`${symbol}${calculateDiscount()}`}</div>
      </div>
      <div className="row">
        <div className="col-xs-10 text-right">Grand Total:</div>
        <div className="col-xs-2 text-right">{`${symbol}${calculateGrandTotal()}`}</div>
      </div>
    </div>
  )
}