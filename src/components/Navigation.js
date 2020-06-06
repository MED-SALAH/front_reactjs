import React from 'react';

import {connect} from 'react-redux'

 class Navigation extends React.Component {
        constructor(props) {
            super(props);

            }
          
    render (){
         return (
                    <div>
                    <div className="theme-setting-wrapper">
                                  <div id="settings-trigger"><i className="mdi mdi-settings"></i></div>
                                  <div id="theme-settings" className="settings-panel">
                                    <i className="settings-close mdi mdi-close"></i>
                                    <p className="settings-heading">SIDEBAR SKINS</p>
                                    <div className="sidebar-bg-options selected" id="sidebar-light-theme"><div className="img-ss rounded-circle bg-light border mr-3"></div>Light</div>
                                    <div className="sidebar-bg-options" id="sidebar-dark-theme"><div className="img-ss rounded-circle bg-dark border mr-3"></div>Dark</div>
                                    <p className="settings-heading mt-2">HEADER SKINS</p>
                                    <div className="color-tiles mx-0 px-4">
                                      <div className="tiles success"></div>
                                      <div className="tiles warning"></div>
                                      <div className="tiles danger"></div>
                                      <div className="tiles primary"></div>
                                      <div className="tiles info"></div>
                                      <div className="tiles dark"></div>
                                      <div className="tiles default"></div>
                                    </div>
                                  </div>
                                </div>

                                <nav className="sidebar sidebar-offcanvas" id="sidebar">
                                  <ul className="nav">
                                    <li className="nav-item nav-profile dropdown">
                                      <div>
                                          <a className="dropdown-toggle" href="#" data-toggle="dropdown" id="profileDropdown" aria-expanded="false">
                                            <div className="d-flex">
                                                <img src="plugins/images/faces/face25.jpg" alt="profile"/>

                                                <div>
                                                  <span className="sidebar-profile-name font-weight-bold">Cecelia Vargas</span>
                                                  <p className="sidebar-profile-designation text-muted text-small">Sales head</p>
                                                </div>
                                            </div>
                                          </a>
                                          <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="profileDropdown">
                                            <a className="dropdown-item">
                                              <i className="mdi mdi-settings text-primary"></i>
                                              Settings
                                            </a>
                                            <a className="dropdown-item">
                                              <i className="mdi mdi-logout text-primary"></i>
                                              Logout
                                            </a>
                                          </div>
                                        </div>
                                    </li>
                                    <li className="nav-item">

                                      <div className="sidebar-menu-title">
                                          <a className="nav-link" href="#/experiments">
                                            <img src="plugins/images/sidebar/home.svg" alt="" className="sidebar-icon-title"/> <span>Experiments</span>
                                          </a>
                                      </div>

                                       <div className="sidebar-menu-title">
                                            <a className="nav-link" href="#/packaged">
                                              <img src="plugins/images/sidebar/home.svg" alt="" className="sidebar-icon-title"/> <span>Packaged</span>
                                            </a>
                                        </div>


                                       <div className="sidebar-menu-title">
                                            <a className="nav-link" href="#/deployed">
                                              <img src="plugins/images/sidebar/home.svg" alt="" className="sidebar-icon-title"/> <span>Deployed</span>
                                            </a>
                                        </div>

                                       <div className="sidebar-menu-title">
                                           <a className="nav-link" href="#/monitonring">
                                             <img src="plugins/images/sidebar/home.svg" alt="" className="sidebar-icon-title"/> <span>Monitoring</span>
                                           </a>
                                       </div>


                                    </li>

                                  </ul>
                                </nav>
                    </div>

                );
            }
}
const mapStateToProps = (state) => {
    return {
        id : state.id 
}
}
export default connect(mapStateToProps)(Navigation);