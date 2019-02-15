import React from 'react'

function Header() {
  return (
    <div>
      <header style={headerStyle}>
        <h1>Budgeter</h1>
      </header>
    </div>
  )
}
const headerStyle = {
  padding: '10px',
  textAlign: 'center',
  background: '#283747',
  color: 'white'
}

export default Header;