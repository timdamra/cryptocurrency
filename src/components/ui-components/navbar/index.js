import React, { useReducer } from 'react'
import { Link } from 'react-router-dom'

import './index.css'

const initialState = {
  coin_list: 'nav__active-item',
  news: '',
  contact: ''
}

function activeNavItemReducer(state, { type }) {
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
      <Link to="/">
        <h2
          className={`${state.coin_list} Advent`}
          onClick={() => {
            dispatch({ type: 'coin_list' })
          }}
        >
          Coin List
        </h2>
      </Link>
      <Link to="/news">
        <h2 className={`${state.news} Advent`} onClick={() => dispatch({ type: 'news' })}>
          News
        </h2>
      </Link>
      <Link to="/contact">
        <h2
          className={`${state.contact} Advent`}
          onClick={() => dispatch({ type: 'contact' })}
        >
          Contact Us
        </h2>
      </Link>
    </nav>
  )
}

export default NavBar
