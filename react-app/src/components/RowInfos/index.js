import React from 'react'

export default function RowInfos() {
  return (
      <div className="row infos">
        <div className="col-xs-6">
          <div className="input-container"><input type="text" ng-model="invoice.customer_info.name"/></div>
          <div className="input-container"><input type="text" ng-model="invoice.customer_info.web_link"/></div>
          <div className="input-container"><input type="text" ng-model="invoice.customer_info.address1"/></div>
          <div className="input-container"><input type="text" ng-model="invoice.customer_info.address2"/></div>
          <div className="input-container"><input type="text" ng-model="invoice.customer_info.postal"/></div>
          <div className="input-container" data-ng-hide='printMode'>
            <select ng-model='currencySymbol' ng-options='currency.symbol as currency.name for currency in availableCurrencies'></select>
          </div>
        </div>
        <div className="col-xs-6 right">
          <div className="input-container"><input type="text" ng-model="invoice.company_info.name"/></div>
          <div className="input-container"><input type="text" ng-model="invoice.company_info.web_link"/></div>
          <div className="input-container"><input type="text" ng-model="invoice.company_info.address1"/></div>
          <div className="input-container"><input type="text" ng-model="invoice.company_info.address2"/></div>
          <div className="input-container"><input type="text" ng-model="invoice.company_info.postal"/></div>
        </div>
      </div>
  )
}