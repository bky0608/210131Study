import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import ResetCSS from './components/shared/reset-css'
import Home from './pages/home'
import MyInfo from './pages/my-info'
import Signin from './pages/signin'
import Search from './pages/search'
import Erorr from './pages/erorr'

function App() {
  return (
    <>
      <ResetCSS />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/myInfo" component={MyInfo} />
          <Route path="/signin" component={Signin} />
          <Route path="/search" component={Search} />
          <Route component={Erorr} />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
