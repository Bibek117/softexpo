import React from 'react'
import { Link, NavLink, Router } from 'react-router-dom'


export default function Navigation() {
    return (
      
  <header id="header" className="fixed-top d-flex align-items-center">
    <div className="container d-flex align-items-center justify-content-between">

      <div className="logo">
        <h1 className="text-light"><a href="/"><span>Ninestars</span></a></h1>
       
       {/* <a href="index.html"><img src="assets/img/logo.png" alt="" className="img-fluid"></a> */}
      </div>

      <nav id="navbar" className="navbar">
        <ul>
          <li><a className="nav-link scrollto active" href="/">Home</a></li>
         
          <li className="dropdown">
            <a className="scrollto categories" href="#">
            <span>Categories</span> <i className="bi bi-chevron-down"></i>
            </a>
            <ul>
              <li><a href="#">Drop Down 1</a></li>
              <li><a href="#">Drop Down 2</a></li>
              <li><a href="#">Drop Down 3</a></li>
              <li><a href="#">Drop Down 4</a></li>
            </ul>
            </li>
          <li><a className="getstarted " href="/vendor/dashboard" >Vendor Portal</a></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>
    </div>
  </header>

    )
}
