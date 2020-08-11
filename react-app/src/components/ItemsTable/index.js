import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import RowItem from '../RowItem'

export default function ItemsTable() {
  const [tax, setTax] = useState(0)
  const symbol = useSelector((state) => state.currencySymbol)
  const subTotal = useSelector((state) => state.subTotal)
  const existingItems = useSelector((state) => state.existingItems)
  const printMode = useSelector((state) => state.printMode)
  const dispatch = useDispatch()

  function calculateTax() {
    return (tax * (subTotal)) / 100
  }

  function calculateGrandTotal() {
    return (calculateTax()) + (subTotal)
  }

  function addItem() {
    dispatch({ type: 'ADD_ITEM', item: 1 })
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
        existingItems.map((item) => <RowItem />)
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