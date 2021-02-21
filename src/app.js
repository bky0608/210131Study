import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import ResetCSS from './components/shared/reset-css';
import Home from './pages/home';
import MyInfo from './pages/my-info';
import Signin from './pages/signin';
import Search from './pages/search';
import Erorr from './pages/erorr';
import Signup from './pages/signup';
import { UserContextProvider } from './contexts/user-context';
import AuthRoute from './components/auth-route';

function App() {
  return (
    <>
      <ResetCSS />
      <UserContextProvider>
        <BrowserRouter>
          <Switch>
            <AuthRoute exact path="/" component={Home} />
            <AuthRoute auth path="/myInfo" component={MyInfo} />
            <AuthRoute path="/signin" component={Signin} />
            <AuthRoute path="/signup" component={Signup} />
            <AuthRoute path="/search" component={Search} />
            <AuthRoute component={Erorr} />
          </Switch>
        </BrowserRouter>
      </UserContextProvider>
    </>
  );
}

export default App;
