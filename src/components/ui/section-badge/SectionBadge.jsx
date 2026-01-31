import React from 'react'
import "./sectionBadge.css"

const SectionBadge = ({icon: Icon, text}) => {
  return (
    <div className='section-badge'>
        <Icon color="#1e2d50" size={16}/>
        <p>{text}</p>
    </div>
  )
}

export default SectionBadge