import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';
import { Trans } from 'react-i18next';

function Navbar(){
    return (
      <nav className="navbar col-lg-12 left-0 col-12 p-lg-0 fixed-top d-flex flex-row">
        <div className="navbar-menu-wrapper w-100 d-flex align-items-center justify-content-between">
        <a className="navbar-brand brand-logo-mini align-self-center d-lg-none" href="!#" onClick={evt =>evt.preventDefault()}><img src="/assets/images/logo-mini.svg" alt="logo" /></a>
          <ul className="navbar-nav navbar-nav-left header-links align-self-center">
            <li className="nav-item font-weight-semibold d-none  d-md-flex">Brand Name</li>
           </ul>
          <form className="ml-auto search-form d-none d-md-block" action="#">
            <div className="form-group">
              <input type="search" className="form-control" placeholder="Search Here" />
            </div>
          </form>
          <ul className="navbar-nav navbar-nav-right">
          <li className="nav-item  nav-profile border-0 pl-4">
          <a className="align-self-center nav-link" href="/vendor/dashboard">For Vendors</a>
            </li>
            <li className="nav-item  nav-profile border-0">
            </li>
          </ul>
          <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" onClick={()=>toggleOffcanvas}>
            <span className="mdi mdi-menu"></span>
          </button>
        </div>
      </nav>
    );
  }


export default Navbar;
