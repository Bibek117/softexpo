import React, { Component,Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import AdminRoutes from '../components/AdminRoutes';
const Notifications = lazy(()=>import('./Pages/Notifications/Notifications'));
import Spinner from './shared/Spinner';
const Dashboard = lazy(() => import('./dashboard/Dashboard'));
const CompanyVerify = lazy(()=>import('./Pages/Company/CompanyVerify'))

class AppRoutes extends Component {
  render () {
    return (
      <Suspense fallback={<Spinner/>}>
        <Switch>
          <AdminRoutes exact path="/appAdmin/dashboard" component={ Dashboard } />
          <AdminRoutes exact path="/appAdmin/notifications" component={ Notifications } />
          <AdminRoutes path="/appAdmin/verify-companies/:company?" component={CompanyVerify} />
          <Redirect to="/appAdmin/dashboard" />
        </Switch>
      </Suspense>
    );
  }
}

export default AppRoutes;
