import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
const Footer = lazy(()=> import('../components/Footer'));
const Navigation = lazy(()=> import('../components/Navigation'));
const Home = lazy(()=> import('../Pages/Home'));
const Login = lazy(()=>import('../Vendors/Login'));
const AdminLogin = lazy(()=> import('../Admin/Login'));
import PublicRoutes from '../components/PublicRoutes'
import Navbar from '../Vendors/shared/Navbar';



function GuestIndex() {
    return (
       <BrowserRouter>
       <Suspense fallback={<div><img src="/images/logo-sample.jpg" alt="loading..."/></div>}>
       <Navigation />
       <Route path="/home" component={Home} exact/>
       <PublicRoutes path="/home/vendorlogin" component={Login} exact/>
       <PublicRoutes path="/home/adminlogin" component={AdminLogin} exact/>
        <Footer />
        </Suspense>
       </BrowserRouter>
    );
}

export default GuestIndex;

if (document.getElementById('mainApp')) {
    ReactDOM.render(<GuestIndex />, document.getElementById('mainApp'));
}
