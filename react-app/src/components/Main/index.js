import React from 'react'

import Footer from '../Footer'
import Branding from '../Branding'
import RowBranding from '../RowBranding'
import RowInfos from '../RowInfos'
import ItemsTable from '../ItemsTable'
import RowNoPrintActions from '../RowNoPrintActions'

export default function Main() {
  return (
    <>
      <div className="container">
        <RowBranding />
        <Branding />
        <RowInfos />
        <ItemsTable />
        <RowNoPrintActions />
      </div>
      <Footer />
    </>
  )
}