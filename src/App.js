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
        <Route exact path="/" render={(props) => <Twoots {...props} />} />
        <Route path="/create" render={(props) => <AddTwoot {...props} />} />
        <Route path="/edit/:id" render={(props) => <EditTwoot {...props} />} />
        <Route path="/read/:id" render={(props) => <Twoot {...props} />} />
      </Switch>
      
      </BrowserRouter>
    </div>
  )
}

export default App
