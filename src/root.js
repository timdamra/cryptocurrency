import React, { StrictMode, Component, Fragment } from 'react'
import { BrowserRouter } from 'react-router-dom'

import App from 'components'
import ErrorBoundary from 'components/error-boundary'

class Root extends Component {
  render = () => {
    return (
      <Fragment>
        <BrowserRouter>
          <StrictMode>
            <ErrorBoundary>
              <App />
            </ErrorBoundary>
          </StrictMode>
        </BrowserRouter>
      </Fragment>
    )
  }
}

export default Root
