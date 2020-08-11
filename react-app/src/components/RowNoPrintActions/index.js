import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function RowNoPrintActions() {
  const printMode = useSelector((state) => state.printMode)
  const dispatch = useDispatch()

  function changePrintMode() {
    dispatch({ type: 'CHANGE_PRINT_MODE' })
  }

  function printInfo() {
    window.print()
  }

  function resetItems() {
    dispatch({ type: 'RESET_ITEMS' })
  }

  return (
    <div class="row noPrint actions">
      <a href="#" className="btn btn-primary" onClick={printInfo} id={ printMode ? "" : "print_button" }>Print</a>
      <a href="#" className="btn btn-primary" onClick={resetItems}>Reset</a>
      <a href="#" className="btn btn-primary" onClick={changePrintMode}>{ printMode ? 'Turn Off Print Mode' : 'Turn On Print Mode' }</a>
    </div>
  )
}