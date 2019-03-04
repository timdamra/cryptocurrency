import React, { useState } from 'react'

function NavBar() {
  const [title, setTitle] = useState('NavBar')

  return (
    <div
      onClick={() => setTitle('Newer NavBar')}
    >
      {title}
    </div>
  )
}

export default NavBar
