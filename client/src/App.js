import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import Styleguide from './components/Styleguide'
import CompaniesList from './components/CompaniesList'
import Signup from './components/Signup'
import CompanyDetails from './components/CompanyDetails'
import EditProfile from './components/EditProfile'
import Logout from './components/Logout'
import Login from './components/Login'
import Or from './components/Or'

const axios = require('axios')

function App(props) {
  const [companies, setCompanies] = useState([])
  const [user, setUser] = useState(props.user)

  useEffect(() => {
    axios
      .get('/api/companies')
      .then((response) => {
        setCompanies(response.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  useEffect(() => {
    setUser(props.user)
  }, [props.user])

  console.log(companies)

  if (!companies) return <h1>Loading...</h1>
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/'>
          <Logout user={user} setUser={setUser} />
          <Login user={user} setUser={setUser} />
          {!user && <Or />}
          <Signup user={user} setUser={setUser} />

          {/* <ProtectedRoute
          path='/account/edit'
          user={user}
          setUser={setUser}
          component={EditProfile}
          redirectPath='/'
        /> */}
          {user && <EditProfile user={user} setUser={setUser} />}

          {/* <CompaniesList companies={companies} /> */}
          <CompaniesList companies={companies} />
        </Route>
        {/* is it possible to do id param with new syntax? */}
        <Route exact path='/companies/:id' component={CompanyDetails} />
        <Route exact path='/styleguide'>
          <Styleguide />
        </Route>
        <Route exact path='/companies/:id' component={CompanyDetails} />
      </Switch>
    </div>
  )
  // }
}
export default App
