import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Collapse } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';
// import {  } from 'react-i18next';

class Sidebar extends Component {
  state = {};

  toggleMenuState(menuState) {
    if (this.state[menuState]) {
      this.setState({[menuState] : false});
    } else if(Object.keys(this.state).length === 0) {
      this.setState({[menuState] : true});
    } else {
      Object.keys(this.state).forEach(i => {
        this.setState({[i]: false});
      });
      this.setState({[menuState] : true});
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }

  onRouteChanged() {
    document.querySelector('#sidebar').classList.remove('active');
    Object.keys(this.state).forEach(i => {
      this.setState({[i]: false});
    });

    const dropdownPaths = [
      {path:'/apps', state: 'appsMenuOpen'},
      {path:'/data-entry', state: 'dataEntryOpen'},
      {path:'/basic-ui', state: 'basicUiMenuOpen'},
      {path:'/form-elements', state: 'formElementsMenuOpen'},
      {path:'/tables', state: 'tablesMenuOpen'},
      {path:'/icons', state: 'iconsMenuOpen'},
      {path:'/charts', state: 'chartsMenuOpen'},
      {path:'/user-pages', state: 'userPagesMenuOpen'},
      {path:'/error-pages', state: 'errorPagesMenuOpen'},
    ];

    dropdownPaths.forEach((obj => {
      if (this.isPathActive(obj.path)) {
        this.setState({[obj.state] : true})
      }
    }));

  }
  render () {
    return (
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <div className="text-center sidebar-brand-wrapper d-flex align-items-center">
          <a className="sidebar-brand brand-logo" href="#"><img src="/assets/images/logo.svg" alt="logo" /></a>
          <a className="sidebar-brand brand-logo-mini pt-3" href="#"><img src="/assets/images/logo-mini.svg" alt="logo" /></a>
        </div>
        <ul className="nav">

          <li className={ this.isPathActive('/appAdmin/dashboard') ? 'nav-item active' : 'nav-item' }>
            <Link className="nav-link" to="/appAdmin/dashboard">
              <i className="mdi mdi-television menu-icon"></i>
              <span className="menu-title"><>Dashboard</></span>
            </Link>
          </li>

          {/* <li className={ this.isPathActive('/appAdmin/appSettings') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.basicUiMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('basicUiMenuOpen') } data-toggle="collapse">
              <i className="mdi mdi-crosshairs-gps menu-icon"></i>
              <span className="menu-title"><>App Settings</></span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={ this.state.basicUiMenuOpen }>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={ this.isPathActive('/appAdmin/app-setting-menubar') ? 'nav-link active' : 'nav-link' } to="/appAdmin/app-setting-menubar"><>Menubar</></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/appAdmin/appSettings/') ? 'nav-link active' : 'nav-link' } to="/appAdmin/appSettings"><>Dropdowns</></Link></li>
              </ul>
            </Collapse>
          </li> */}
          {/* <li className={ this.isPathActive('/basic-ui') ? 'nav-item active' : 'nav-item' }>

            <Link className="nav-link" to="/appAdmin/users">
              <i className="mdi mdi-crosshairs-gps menu-icon"></i>
              <span className="menu-title"><>Users</></span>

              </Link>
          </li> */}
          <li className={ this.isPathActive('/appAdmin/companies') ? 'nav-item active' : 'nav-item' }>
            <Link className="nav-link" to="/appAdmin/companies">
              <i className="mdi mdi-crosshairs-gps menu-icon"></i>
              <span className="menu-title"><>Company Managment</></span>
              </Link>
          </li>
          {/* <li className={ this.isPathActive('/basic-ui') ? 'nav-item active' : 'nav-item' }>
            <Link className="nav-link" to="/appAdmin/users">
              <i className="mdi mdi-crosshairs-gps menu-icon"></i>
              <span className="menu-title"><>Softwares Managment</></span>
              </Link>
          </li>
          <li className={ this.isPathActive('/basic-ui') ? 'nav-item active' : 'nav-item' }>
            <Link className="nav-link" to="/appAdmin/users">
              <i className="mdi mdi-crosshairs-gps menu-icon"></i>
              <span className="menu-title"><>Services Managment</></span>
              </Link>
          </li> */}
          <li className={ this.isPathActive('/appAdmin/data-entry') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.dataEntryOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('dataEntryOpen') } data-toggle="collapse">
              <i className="mdi mdi-crosshairs-gps menu-icon"></i>
              <span className="menu-title"><>Data Entry</></span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={ this.state.dataEntryOpen }>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={ this.isPathActive('/appAdmin/data-entry-software-categories') ? 'nav-link active' : 'nav-link' } to="/appAdmin/data-entry-software-categories"><>Software Categories</></Link></li>
                {/* <li className="nav-item"> <Link className={ this.isPathActive('/appAdmin/appSettings/') ? 'nav-link active' : 'nav-link' } to="/appAdmin/appSettings"><>Dropdowns</></Link></li> */}
              </ul>
            </Collapse>
          </li>
        </ul>
      </nav>
    );
  }

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }

  componentDidMount() {
    this.onRouteChanged();
    // add className 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
    const body = document.querySelector('body');
    document.querySelectorAll('.sidebar .nav-item').forEach((el) => {

      el.addEventListener('mouseover', function() {
        if(body.classList.contains('sidebar-icon-only')) {
          el.classList.add('hover-open');
        }
      });
      el.addEventListener('mouseout', function() {
        if(body.classList.contains('sidebar-icon-only')) {
          el.classList.remove('hover-open');
        }
      });
    });
  }

}

export default withRouter(Sidebar);
