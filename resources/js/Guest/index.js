import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
const Footer = lazy(()=> import('../components/Footer'));
const Navigation = lazy(()=> import('../components/Navigation'));
const Home = lazy(()=> import('../Pages/Home'));
const Login = lazy(()=>import('../Vendors/Login'));
import PublicRoutes from '../components/PublicRoutes';



function GuestIndex() {
    return (
       <BrowserRouter>
       <Suspense fallback={<div>loading...........</div>}>
       <Navigation />
       <Route path="/home" component={Home} exact/>
       <PublicRoutes path="/home/vendorlogin" component={Login} exact/>  
        <Footer />
        </Suspense>
       </BrowserRouter>
    );
}

export default GuestIndex;

if (document.getElementById('mainApp')) {
    ReactDOM.render(<GuestIndex />, document.getElementById('mainApp'));
}