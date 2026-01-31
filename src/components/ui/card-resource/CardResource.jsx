import React from 'react'
import "./cardResource.css"

const CardResource = ({icon: Icon, title, text}) => {
  return (
    <div className='card-resource'>
        <div className='icons'>
            <Icon color="#1e2d50" size={22}/>
        </div>
        <h3>{title}</h3>
        <p>{text}</p>
    </div>
  )
}

export default CardResource