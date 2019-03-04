import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import './app.css'

import rootReducer from 'reducers'
import { topListWatcher, singleSymbolWatcher } from 'sagas'

import App from 'components'
import ErrorBoundary from 'components/error-boundary'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(topListWatcher)
sagaMiddleware.run(singleSymbolWatcher)

ReactDOM.render(
  <Provider store={store}>
    <StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </StrictMode>
  </Provider>,
  document.getElementById('root')
)
