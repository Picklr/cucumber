import React from 'react'

import {Navbar, ShoppingList} from './components'
import Routes from './routes'



const App = () => {
  return (
    <div>
      <Navbar />
      <ShoppingList />
      <Routes />
    </div>
  )
}

export default App
