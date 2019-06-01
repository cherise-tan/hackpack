import React from 'react'

import icon from '../images/icon.png'

const Header = (props) => {
  return (
    <div className="row header">
      <div className="logo">Hack Pack</div>
      <div className="menuicon"><img src={icon} /></div>
    </div>
  )
}

export default Header
