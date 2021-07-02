import React, { Component,Suspense, lazy } from 'react';
import { Switch, Redirect } from 'react-router-dom';
import AdminLogin from '../Admin/Login';
import Login from '../Vendors/Login';
import PublicRoutes from './components/PublicRoutes';
const Home = lazy(()=>import('./Pages/Home'))
const Software = lazy(()=>import('./Pages/Software'))
import Spinner from './shared/Spinner';

const Explore = lazy(() => import('./Pages/Explore'));


class AppRoutes extends Component {
  render () {
    return (
      <Suspense fallback={<Spinner/>}>
        <Switch>
          <PublicRoutes exact path="/home" component={ Home } />
          <PublicRoutes path="/home/explore" component={ Explore } />
          <PublicRoutes path="/softwares/:software" component={Software} />
          <PublicRoutes path="/home/vendorlogin" component={Login} />
          <PublicRoutes path="/home/adminlogin" component={AdminLogin} />
          <Redirect to="/home" />
        </Switch>
      </Suspense>
    );
  }
}

export default AppRoutes;