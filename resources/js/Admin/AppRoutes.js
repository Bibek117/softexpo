import React, { Component,Suspense, lazy } from 'react';
import { Switch, Redirect } from 'react-router-dom';
import AdminRoutes from '../Guest/components/AdminRoutes';
import Companies from './Pages/Company/Companies';
const Notifications = lazy(()=>import('./Pages/Notifications/Notifications'));
import Spinner from './shared/Spinner';
const Dashboard = lazy(() => import('./dashboard/Dashboard'));
const CompanyVerify = lazy(()=>import('./Pages/Company/CompanyVerify'))
const Software = lazy(()=>import('./Pages/DataEntry/Software'))

class AppRoutes extends Component {
  render () {
    return (
      <Suspense fallback={<Spinner/>}>
        <Switch>
          <AdminRoutes exact path="/appAdmin/dashboard" component={ Dashboard } />
          <AdminRoutes exact path="/appAdmin/notifications" component={ Notifications } />
          <AdminRoutes exact path="/appAdmin/companies" component={ Companies } />
          <AdminRoutes path="/appAdmin/verify-companies/:company?" component={CompanyVerify} />
          <AdminRoutes path="/appAdmin/data-entry-software-categories" component={Software} />
          <Redirect to="/appAdmin/dashboard" />
        </Switch>
      </Suspense>
    );
  }
}

export default AppRoutes;
