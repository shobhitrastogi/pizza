import React from 'react'

const MenuItem = ({name,price,image}) => {
  return (
    <div className="menuItem">
        <div style={{backgroundImage: `url(${image})`}}></div>
        <h1>{name}</h1>
        <p>{price}</p>
    </div>
  )
}

export default MenuItem