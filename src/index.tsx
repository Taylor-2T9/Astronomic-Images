import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import CustomDate from './components/CustomDate'
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={App} />
        <Route path="/customDate" component={CustomDate} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);