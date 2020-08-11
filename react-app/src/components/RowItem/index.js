import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default function RowItem() {
  const [itemsDescription, setItemsDescription] = useState('')
  const [itemsQty, setItemsQty] = useState(0)
  const [itemsCost, setItemsCost] = useState(0)
  const symbol = useSelector((state) => state.currencySymbol)
  const subTotal = useSelector((state) => state.subTotal)
  const printMode = useSelector((state) => state.printMode)
  const dispatch = useDispatch()

  const calculateSubTotal = () => {
    const result = itemsCost * itemsQty

    return result
  }

  useEffect(() => {
    changeSubTotal()
    console.log(subTotal)
  }, [calculateSubTotal()])


  function removeItem() {
    dispatch({ type: 'REMOVE_ITEM' })
  }

  function changeSubTotal() {
    dispatch({ type: 'ADD_SUBTOTAL', result: itemsCost * itemsQty })
  }

  return (
    <div className="row invoice-item">
      <div className="col-xs-1 remove-item-container">
        <a href className="btn btn-danger" id={ printMode ? "close_button" : "" } onClick={removeItem}>[X]</a>
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
        {symbol}{calculateSubTotal()} 
      </div>

    </div>
  )
}