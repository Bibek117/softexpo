import React, { Component,Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import VendorRoutes from '../components/VendorRoutes';


import Spinner from './shared/Spinner';

const Dashboard = lazy(() => import('./dashboard/Dashboard'));

const Buttons = lazy(() => import('./basic-ui/Buttons'));
const Dropdowns = lazy(() => import('./basic-ui/Dropdowns'));

const BasicElements = lazy(() => import('./form-elements/BasicElements'));

const BasicTable = lazy(() => import('./tables/BasicTable'));

const Mdi = lazy(() => import('./icons/Mdi'));

const ChartJs = lazy(() => import('./charts/ChartJs'));

const Error404 = lazy(() => import('./error-pages/Error404'));
const Error500 = lazy(() => import('./error-pages/Error500'));

const Login = lazy(() => import('./user-pages/Login'));
const Register1 = lazy(() => import('./user-pages/Register'));
const Company = lazy(()=>import('./Pages/Company/index'))


class AppRoutes extends Component {
  render () {
    return (
      <Suspense fallback={<Spinner/>}>
        <Switch>
          <VendorRoutes exact path="/vendor/dashboard" component={ Dashboard } />
          <VendorRoutes path="/vendor/basic-ui/buttons" component={ Buttons } />
          <VendorRoutes path="/basic-ui/dropdowns" component={ Dropdowns } />
          <VendorRoutes path="/vendor/form-Elements" component={ BasicElements } />
          <VendorRoutes path="/vendor/tables/basic-table" component={ BasicTable } />
          <VendorRoutes path="/vendor/icons/mdi" component={ Mdi } />
          <VendorRoutes path="/vendor/charts/chart-js" component={ ChartJs } />
          <VendorRoutes path="/vendor/user-pages/login-1" component={ Login } />
          <VendorRoutes path="/vendor/user-pages/register-1" component={ Register1 } />
          <VendorRoutes path="/vendor/error-pages/error-404" component={ Error404 } />
          <VendorRoutes path="/vendor/error-pages/error-500" component={ Error500 } />
          <VendorRoutes path="/vendor/company" component={ Company } />

          <Redirect to="/vendor/dashboard" />
        </Switch>
      </Suspense>
    );
  }
}

export default AppRoutes;
