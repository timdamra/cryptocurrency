import React, { Component, Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'

import App from 'components'
import NavBar from 'components/ui-components/navbar'

export class AppRouter extends Component {
  render = () => {
    return (
      <Fragment>
        <NavBar />
        <Switch>
          <Route
            path="/news"
            render={() => {
              return <h2>News Page</h2>
            }}
          />
          <Route
            path="/contact"
            render={() => {
              return <h2>Contact</h2>
            }}
          />
          <Route path="/" component={App} />
          <Route render={() => 'No Match'} />
        </Switch>
      </Fragment>
    )
  }
}

export default AppRouter
