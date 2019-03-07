import React, { useReducer } from 'react'

import './index.css'

const initialState = {
  coin_list: 'nav__active-item',
  news: '',
  contact: ''
}

function activeNavItemReducer (state, { type }) {
  switch (type) {
    case 'coin_list':
      return initialState
    case 'news':
      return { coin_list: '', news: 'nav__active-item', contact: '' }
    case 'contact':
      return { coin_list: '', news: '', contact: 'nav__active-item' }
    default:
      return state
  }
}

function NavBar() {
  const [state, dispatch] = useReducer(activeNavItemReducer, initialState)

  return (
    <nav className="nav-flex">
      <div>
      <h2
          className={state['coin_list']}
          onClick={() => {
            dispatch({ type: 'coin_list' })
          }}
        >
          Coin List
        </h2>
      </div>
      <div>
        <h2
          className={state['news']}
          onClick={() => dispatch({ type: 'news' })}
        >
          News
        </h2>
      </div>
      <div>
        <h2
          className={state['contact']}
          onClick={() => dispatch({ type: 'contact' })}
        >
          Contact Us
        </h2>
      </div>
    </nav>
  )
}

export default NavBar
