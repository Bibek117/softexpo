import React, { lazy } from 'react';
import ReactDOM from 'react-dom';
const Home = lazy(()=> import('./Pages/Home'));
import PublicRoutes from '../components/PublicRoutes'
import VendorRoutes from '../components/VendorRoutes'
import { BrowserRouter, Switch } from 'react-router-dom';


function Example() {
    return (
        <BrowserRouter>
        <Switch>
          <VendorRoutes restricted={false} component={Home} path="/vendor/" exact />
          <VendorRoutes restricted={false} component={Home} path="/vendor/dashboard" exact />
        </Switch>
      </BrowserRouter>
    );
}

export default Example;

if (document.getElementById('vendorApp')) {
    ReactDOM.render(<Example />, document.getElementById('vendorApp'));
}