import React, { useState } from 'react'
import LogoImg from '../../assets/metaware_logo.png'

export default function Branding() {
  const [isHide, setIsHide] = useState(false)
  const [invoiceNumber, setInvoiceNumber] = useState(10)

  function editLogo() {
    document.getElementById('imgInp').click()
  }
  
  function toggleLogo() {
    setIsHide(!isHide)
  }

  return (
    <div className="row branding">
      <div className="col-xs-6">
        <div className="invoice-number-container" onChange={(e) => setInvoiceNumber(e.target.value)}>
          <label htmlFor="invoice-number">Invoice #</label><input value={invoiceNumber} type="text" id="invoice-number" />
        </div>
      </div>
      <div className="col-xs-6 logo-container">
        <input type="file" id="imgInp" />
        <img id="company_logo" className={ isHide ? 'invisibleLogo' : '' } src={LogoImg} alt="your image" width="300" />
        <div>
          <div className="noPrint">
            <a onClick={editLogo}>Edit Logo</a>
            <a id="remove_logo" onClick={toggleLogo} >{ isHide ? 'Show logo' : 'Hide logo' }</a>
          </div>
        </div>
      </div>
    </div>
  )
}