import React from 'react'

export default function Branding() {
  return (
    <div class="row branding">
      <div class="col-xs-6">
        <div class="invoice-number-container">
          <label for="invoice-number">Invoice #</label><input type="text" id="invoice-number" />
        </div>
      </div>
      <div class="col-xs-6 logo-container">
        <input type="file" id="imgInp" />
        <img id="company_logo" alt="your image" width="300" />
        <div>
          <div class="noPrint">
            <a>Edit Logo</a>
            <a id="remove_logo" >logo</a>
          </div>
        </div>
      </div>
    </div>
  )
}