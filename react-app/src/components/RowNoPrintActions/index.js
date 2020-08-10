import React from 'react'

export default function RowNoPrintActions() {
  return (
    <div class="row noPrint actions">
      <a href="#" class="btn btn-primary" ng-show="printMode" ng-click="printInfo()">Print</a>
      <a href="#" class="btn btn-primary" ng-click="clearLocalStorage()">Reset</a>
      <a href="#" class="btn btn-primary" ng-hide="printMode" ng-click="printMode = true;">Turn On Print Mode</a>
      <a href="#" class="btn btn-primary" ng-show="printMode" ng-click="printMode = false;">Turn Off Print Mode</a>
    </div>
  )
}