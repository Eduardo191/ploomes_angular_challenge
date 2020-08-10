import React from 'react'

export default function ItemsTable() {
  return (
    <div className="items-table">
      <div className="row header">
        <div className="col-xs-1">&nbsp;</div>
        <div className="col-xs-5">Description</div>
        <div className="col-xs-2">Quantity</div>
        {/* <div className="col-xs-2">Cost {{currencySymbol}}</div> */}
        <div className="col-xs-2 text-right">Total</div>
      </div>
      <div className="row invoice-item" ng-repeat="item in invoice.items" ng-animate="'slide-down'">
        <div className="col-xs-1 remove-item-container">
          <a href ng-hide="printMode" ng-click="removeItem(item)" className="btn btn-danger">[X]</a>
        </div>
        <div className="col-xs-5 input-container">
          <input ng-model="item.description" placeholder="Description" />
        </div>
        <div className="col-xs-2 input-container">
          <input ng-model="item.qty" value="1" size="4" ng-required ng-validate="integer" placeholder="Quantity" />
        </div>
        <div className="col-xs-2 input-container">
          <input ng-model="item.cost" value="0.00" ng-required ng-validate="number" size="6" placeholder="Cost" />
        </div>
        <div className="col-xs-2 text-right input-container">
          {/* {{item.cost * item.qty | currency: currencySymbol}} */}
        </div>
      </div>
      <div className="row invoice-item">
        <div className="col-xs-12 add-item-container" ng-hide="printMode">
          <a className="btn btn-primary" href ng-click="addItem()" >[+]</a>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-10 text-right">Sub Total</div>
        {/* <div className="col-xs-2 text-right">{{invoiceSubTotal() | currency: currencySymbol}}</div> */}
      </div>
      <div className="row">
        {/* <div className="col-xs-10 text-right">Tax(%): <input ng-model="invoice.tax" ng-validate="number" style="width:43px"></div> */}
        {/* <div className="col-xs-2 text-right">{{calculateTax() | currency: currencySymbol}}</div> */}
      </div>
      <div className="row">
        <div className="col-xs-10 text-right">Grand Total:</div>
        {/* <div className="col-xs-2 text-right">{{calculateGrandTotal() | currency: currencySymbol}}</div> */}
      </div>
    </div>
  )
}