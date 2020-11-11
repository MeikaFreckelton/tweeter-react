import React, {useState, useEffect} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import AddTwoot from './components/AddTwoot'
import EditTwoot from './components/EditTwoot'
import Twoot from './components/Twoot'
import Twoots from './components/Twoots'
import blogData from './data/post_data'


const App = () => {

  const [twoots, setTwoots] = useState([])

  useEffect(() => {
    setTwoots(blogData)
  }, [])

  const addTwoot = (twoot) => {
    setTwoots([...twoots, twoot])
  }

  const nextId = () => {
    return twoots.reduce((acc, cur) => acc._id > cur._id ? acc : cur, {_id: 0 })._id + 1
  }

  const getTwootFromId = (id) => {
    return twoots.find((t) => t._id === parseInt(id))

  }

  const updateTwoot = (inTwoot) => {
    const updatedTwoots = twoots.map((t) => (t._id === inTwoot._id) ? inTwoot : t)
    setTwoots(updatedTwoots)
  }

  const deleteTwoot = (id) => {
    const updatedTwoots = twoots.filter((t) => t._id !== parseInt(id))
    setTwoots(updatedTwoots)
  }

  const heading = {
    fontFamily: 'PT Sans',
    fontSize: "4rem",
    paddingLeft: '5%'
  }

  return (
    <div >
      <h1 style={heading}>Tweeter</h1>
      <BrowserRouter>
      <Navbar />

      <Switch>
        
        <Route exact path="/twoot/new" render={(props) => <AddTwoot {...props} addTwoot={addTwoot} nextId={nextId()}/>} />
        <Route exact path="/twoot/edit/:id" render={(props) => <EditTwoot {...props} updateTwoot={updateTwoot} twoot={ getTwootFromId(props.match.params.id)}  />} />
        <Route exact path="/twoot/:id" render={(props) => <Twoot {...props} twoot={getTwootFromId(props.match.params.id)} showControls deleteTwoot={deleteTwoot} />} />
        <Route exact path="/" render={(props) => <Twoots {...props} twootsData={twoots} />} />
      </Switch>
      
      </BrowserRouter>
    </div>
  )
}

export default App
