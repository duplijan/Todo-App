import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Provider} from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { reducer } from './store/rootReducer'
import { logger } from 'redux-logger'
import App from './containers/App'

//applyMiddleware(logger) for logging actions and state in console
const store = createStore(reducer, applyMiddleware(logger))

ReactDOM.render(
    <Provider store={store} >
          <App />
      </Provider>,
    document.getElementById('root'));
