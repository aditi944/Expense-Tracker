//for the boiler plate of react type "rfce"  
import React from 'react'

function Header({totalIncome}) {
  return (
    <header>
        <h1>Expense Manager</h1>
        <div className="total-income">${totalIncome}</div>
    </header>
  )
}

export default Header