import React, { useState } from 'react'

function SubNavBar(props) {
  const [activeItem, setActiveItem] = useState(0)

  return (
    <ul>
      {props.coinListSubNavExpanded &&
        React.Children.map((item, idx) => {
          return (
            <li
              onClick={() => setActiveItem(idx)}
              className={activeItem === idx ? 'nav--sub-nav-item__active' : ''}
              key={idx}
            >
              {item.text}
            </li>
          )
        })}
    </ul>
  )
}

export default SubNavBar
