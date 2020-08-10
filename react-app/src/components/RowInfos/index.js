import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

export default function RowInfos() {
  const [customerName, setCustomerName] = useState('')
  const [customerWebLink, setCustomerWebLink] = useState('')
  const [customerAddress1, setCustomerAddress1] = useState('')
  const [customerAddress2, setCustomerAddress2] = useState('')
  const [customerPostal, setCustomerPostal] = useState('')

  const [companyName, setCompanyName] = useState('')
  const [companyWebLink, setCompanyWebLink] = useState('')
  const [companyAddress1, setCompanyAddress1] = useState('')
  const [companyAddress2, setCompanyAddress2] = useState('')
  const [companyPostal, setCompanyPostal] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    setCustomerName('Mr. John Doe')
    setCustomerWebLink('John Doe Designs Inc.')
    setCustomerAddress1('1 Infinite Loop')
    setCustomerAddress2('Cupertino, California, US')
    setCustomerPostal('90210')
    setCompanyName('Metaware Labs')
    setCompanyWebLink('www.metawarelabs.com')
    setCompanyAddress1('123 Yonge Street')
    setCompanyAddress2('Toronto, ON, Canada')
    setCompanyPostal('M5S 1B6')
  }, [])

  return (
      <div className="row infos">
        <div className="col-xs-6">
          <div 
            className="input-container" 
            onChange={(e) => setCustomerName(e.target.value)}
          >
            <input type="text" value={customerName}/>
          </div>

          <div 
            className="input-container" 
            onChange={(e) => setCustomerWebLink(e.target.value)}
          >
            <input type="text" value={customerWebLink}/>
          </div>

          <div 
            className="input-container" 
            onChange={(e) => setCustomerAddress1(e.target.value)}
          >
            <input type="text" value={customerAddress1}/>
          </div>

          <div 
            className="input-container" 
            onChange={(e) => setCustomerAddress2(e.target.value)}
          >
            <input type="text" value={customerAddress2}/>
          </div>

          <div 
            className="input-container" 
            onChange={(e) => setCustomerPostal(e.target.value)}
          >
            <input type="text" value={customerPostal}/>
          </div>

          <div className="input-container">
            <select onChange={(e) => dispatch({ type: 'CHANGE_SYMBOL', symbol: e.target.value })}>
              <option value="£">British Pound (£)</option>
              <option value="CAD $ ">Canadian Dollar ($)</option>
              <option value="€">Euro (€)</option>
              <option value="₹">Indian Rupee (₹)</option>
              <option value="kr">Norwegian krone (kr)</option>
              <option selected value="$">US Dollar ($)</option>
            </select>
          </div>
        </div>
        <div className="col-xs-6 right">
          <div 
            className="input-container"
            onChange={(e) => setCompanyName(e.target.value)}
          >
            <input type="text" value={companyName}/>
          </div>

          <div 
            className="input-container"
            onChange={(e) => setCompanyWebLink(e.target.value)}
          >
            <input type="text" value={companyWebLink}/>
          </div>

          <div 
            className="input-container"
            onChange={(e) => setCompanyAddress1(e.target.value)}
          >
            <input type="text" value={companyAddress1}/>
          </div>

          <div 
            className="input-container"
            onChange={(e) => setCompanyAddress2(e.target.value)}
          >
            <input type="text" value={companyAddress2}/>
          </div>

          <div 
            className="input-container"
            onChange={(e) => setCompanyPostal(e.target.value)}
          >
            <input type="text" value={companyPostal}/>
          </div>
        </div>
      </div>
  )
}