import React, { Component, Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'

import App from 'components'
import NavBar from 'components/ui-components/navbar'
import Footer from 'components/ui-components/footer'

export class AppRouter extends Component {
  render = () => {
    return (
      <Fragment>
        <NavBar />
        <Switch>
          <Route
            path="/news"
            render={() => {
              return (
                <section className="route-section">
                  <h2>News Page</h2>
                </section>
              )
            }}
          />
          <Route
            path="/contact"
            render={() => {
              return (
                <section className="route-section">
                  <h2>Contact</h2>
                </section>
              )
            }}
          />
          <Route path="/" component={App} />
          <Route render={() => 'No Match'} />
        </Switch>
        <Footer />
      </Fragment>
    )
  }
}

export default AppRouter
