import React, { Component,Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import AdminRoutes from '../components/AdminRoutes';
import VendorRoutes from '../components/VendorRoutes';
import AddCompany from './Pages/Company/AddCompany';


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
          <AdminRoutes exact path="/appAdmin/dashboard" component={ Dashboard } />
          <Redirect to="/appAdmin/dashboard" />
        </Switch>
      </Suspense>
    );
  }
}

export default AppRoutes;
