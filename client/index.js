import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {Router} from 'react-router-dom'
import history from './history'
import store from './store'
import App from './app'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// establishes socket connection
import './socket'

const MuiApp = () => (
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <MuiApp />
    </Router>
  </Provider>,
  document.getElementById('app')
)
