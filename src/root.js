import React, { StrictMode, Component, Fragment } from 'react'
import { BrowserRouter } from 'react-router-dom'

import AppRouter from './app_router'
import ErrorBoundary from 'components/error-boundary'

class Root extends Component {
  render = () => {
    return (
      <Fragment>
        <BrowserRouter>
          <StrictMode>
            <ErrorBoundary>
              <AppRouter />
            </ErrorBoundary>
          </StrictMode>
        </BrowserRouter>
      </Fragment>
    )
  }
}

export default Root
