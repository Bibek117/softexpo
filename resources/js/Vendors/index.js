import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
const Home = lazy(()=> import('./Pages/Home'));
import VendorRoutes from '../components/VendorRoutes'
import { BrowserRouter, Switch } from 'react-router-dom';


function Example() {
    return (
        <BrowserRouter>
         <Suspense fallback={<div>loading..</div>}>
           <Home />
        </Suspense>
      </BrowserRouter>
    );
}

export default Example;

if (document.getElementById('vendorApp')) {
    ReactDOM.render(<Example />, document.getElementById('vendorApp'));
}