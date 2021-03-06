import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'

import AuthenticatedRoute from '../AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from '../AutoDismissAlert/AutoDismissAlert'
import Header from '../Header/Header'
import SignUp from '../SignUp/SignUp'
import SignIn from '../SignIn/SignIn'
import SignOut from '../SignOut/SignOut'
import ChangePassword from '../ChangePassword/ChangePassword'
import Home from '../Home/Home'
import Reports from '../Reports/Reports'
import NewReport from '../Reports/NewReport'
import Report from '../Reports/Report'

const styles = {
  font: {
    fontFamily: 'Montserrat'
  }
}

class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      alerts: []
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  alert = ({ heading, message, variant }) => {
    this.setState({ alerts: [...this.state.alerts, { heading, message, variant }] })
  }

  render () {
    const { alerts, user } = this.state

    return (
      <Fragment>
        <Header user={user} />
        {alerts.map((alert, index) => (
          <AutoDismissAlert
            key={index}
            heading={alert.heading}
            variant={alert.variant}
            message={alert.message}
          />
        ))}
        <main className="container" style={styles.font}>
          <Route exact path='/sign-up' render={() => (
            <SignUp alert={this.alert} setUser={this.setUser} />
          )} />
          <Route exact path='/sign-in' render={() => (
            <SignIn alert={this.alert} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} exact path='/sign-out' render={() => (
            <SignOut alert={this.alert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/change-password' render={() => (
            <ChangePassword alert={this.alert} user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/home' render={() => (
            <Home alert={this.alert} user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/reports' render={() => (
            <Reports alert={this.alert} user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/reports/new/:jobId' render={() => (
            <NewReport alert={this.alert} user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/reports/:id' render={() => (
            <Report alert={this.alert} user={user} />
          )} />
        </main>
      </Fragment>
    )
  }
}

export default App
