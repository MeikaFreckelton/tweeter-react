import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import AddTwoot from './components/AddTwoot'
import EditTwoot from './components/EditTwoot'
import Twoot from './components/Twoot'
import Twoots from './components/Twoots'


const App = () => {
  return (
    <div >
      <h1>Tweeter</h1>
      <BrowserRouter>

      <Switch>
        <Route path="/" 
      </Switch>
      
      </BrowserRouter>
    </div>
  )
}

export default App
