import React from 'react';
//import logo from './logo.svg';
import '../App.css';

import {connect} from 'react-redux'

 class Header extends React.Component {
        constructor(props) {
            super(props);

            }
          
    render (){
         return (
                     <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
                          <div className="navbar-brand-wrapper d-flex align-items-center justify-content-between">
                            <a className="navbar-brand brand-logo" href="index.html"><img src="plugins/images/logo.svg" alt="logo"/></a>
                            <a className="navbar-brand brand-logo-mini" href="index.html"><img src="plugins/images/logo-mini.svg" alt="logo"/></a>
                            <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
                              <img src="plugins/images/sidebar/menu.svg" alt="" className=""/>
                            </button>
                          </div>
                          <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
                            <ul className="navbar-nav mr-lg-2">
                              <li className="nav-item nav-search d-none d-lg-block">
                                <div className="input-group pl-0">
                                  <input type="text" className="form-control ml-0" placeholder="Search Projects.." aria-label="search"/>
                                </div>
                              </li>
                            </ul>
                            <ul className="navbar-nav navbar-nav-right">
                              <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle d-flex justify-content-center align-items-center font-weight-medium" id="languageDropdown" href="#" data-toggle="dropdown">
                                  English
                                </a>
                                <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="languageDropdown">
                                  <a className="dropdown-item preview-item">
                                  English
                                  </a>
                                  <a className="dropdown-item preview-item">
                                    Arabic
                                    </a>
                                </div>
                              </li>
                              <li className="nav-item dropdown">
                                <a className="nav-link  dropdown-toggle d-flex justify-content-center align-items-center" id="messageDropdown" href="#" data-toggle="dropdown">
                                    <img src="plugins/images/sidebar/mail.svg" alt="" className=""/>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="messageDropdown">
                                  <p className="mb-0 font-weight-normal float-left dropdown-header">Messages</p>
                                  <a className="dropdown-item preview-item">
                                    <div className="preview-thumbnail">
                                        <img src="plugins/images/faces/face4.jpg" alt="image" className="profile-pic"/>
                                    </div>
                                    <div className="preview-item-content flex-grow">
                                      <h6 className="preview-subject ellipsis font-weight-normal">David Grey
                                      </h6>
                                      <p className="font-weight-light small-text text-muted mb-0">
                                        The meeting is cancelled
                                      </p>
                                    </div>
                                  </a>
                                  <a className="dropdown-item preview-item">
                                    <div className="preview-thumbnail">
                                        <img src="plugins/images/faces/face2.jpg" alt="image" className="profile-pic"/>
                                    </div>
                                    <div className="preview-item-content flex-grow">
                                      <h6 className="preview-subject ellipsis font-weight-normal">Tim Cook
                                      </h6>
                                      <p className="font-weight-light small-text text-muted mb-0">
                                        New product launch
                                      </p>
                                    </div>
                                  </a>
                                  <a className="dropdown-item preview-item">
                                    <div className="preview-thumbnail">
                                        <img src="plugins/images/faces/face3.jpg" alt="image" className="profile-pic"/>
                                    </div>
                                    <div className="preview-item-content flex-grow">
                                      <h6 className="preview-subject ellipsis font-weight-normal"> Johnson
                                      </h6>
                                      <p className="font-weight-light small-text text-muted mb-0">
                                        Upcoming board meeting
                                      </p>
                                    </div>
                                  </a>
                                </div>
                              </li>
                              <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle d-flex align-items-center justify-content-center" id="notificationDropdown" href="#" data-toggle="dropdown">
                                    <img src="plugins/images/sidebar/notification.svg" alt="" className=""/>
                                  <span className="count-circle"></span>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="notificationDropdown">
                                  <p className="mb-0 font-weight-normal float-left dropdown-header">Notifications</p>
                                  <a className="dropdown-item preview-item">
                                    <div className="preview-thumbnail">
                                      <div className="preview-icon bg-success">
                                        <i className="mdi mdi-information mx-0"></i>
                                      </div>
                                    </div>
                                    <div className="preview-item-content">
                                      <h6 className="preview-subject font-weight-normal">Application Error</h6>
                                      <p className="font-weight-light small-text mb-0 text-muted">
                                        Just now
                                      </p>
                                    </div>
                                  </a>
                                  <a className="dropdown-item preview-item">
                                    <div className="preview-thumbnail">
                                      <div className="preview-icon bg-warning">
                                        <i className="mdi mdi-settings mx-0"></i>
                                      </div>
                                    </div>
                                    <div className="preview-item-content">
                                      <h6 className="preview-subject font-weight-normal">Settings</h6>
                                      <p className="font-weight-light small-text mb-0 text-muted">
                                        Private message
                                      </p>
                                    </div>
                                  </a>
                                  <a className="dropdown-item preview-item">
                                    <div className="preview-thumbnail">
                                      <div className="preview-icon bg-info">
                                        <i className="mdi mdi-account-box mx-0"></i>
                                      </div>
                                    </div>
                                    <div className="preview-item-content">
                                      <h6 className="preview-subject font-weight-normal">New user registration</h6>
                                      <p className="font-weight-light small-text mb-0 text-muted">
                                        2 days ago
                                      </p>
                                    </div>
                                  </a>
                                </div>
                              </li>
                              <li className="nav-item nav-profile dropdown">
                                <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" id="profileDropdown-navbar">
                                  <img src="plugins/images/faces/face25.jpg" alt="profile"/>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right navbar-dropdown flat-dropdown" aria-labelledby="profileDropdown-navbar">
                                  <div className="flat-dropdown-header">
                                    <div className="d-flex">
                                        <img src="plugins/images/faces/face25.png" alt="profile" className="profile-icon mr-2"/>
                                        <div>
                                          <span className="profile-name font-weight-bold">Cecelia Vargas</span>
                                          <p className="profile-designation">Sales head</p>
                                        </div>
                                    </div>
                                  </div>
                                  <div className="profile-dropdown-body">
                                      <ul className="list-profile-items">
                                        <li className="profile-item">
                                          <a href="#" className="profile-dropdown-link">
                                            <div className="d-flex align-items-center">
                                                <i className="mdi mdi-account-outline text-primary"></i>
                                                <div>
                                                  <h5 className="item-title">My Profile</h5>
                                                  <p className="item-detail">Account settings and more</p>
                                                </div>
                                              </div>
                                          </a>
                                        </li>
                                        <li className="profile-item">
                                          <a href="#" className="profile-dropdown-link">
                                            <div className="d-flex align-items-center">
                                                <i className="mdi mdi-email-outline text-info"></i>
                                                <div>
                                                  <h5 className="item-title">My Messages</h5>
                                                  <p className="item-detail">Inbox and tasks</p>
                                                </div>
                                              </div>
                                          </a>
                                        </li>
                                        <li className="profile-item">
                                          <a href="#" className="profile-dropdown-link">
                                            <div className="d-flex align-items-center">
                                              <i className="mdi mdi-vector-polyline text-danger"></i>
                                              <div>
                                                <h5 className="item-title">My Activities</h5>
                                                <p className="item-detail">Logs and notifications</p>
                                              </div>
                                            </div>
                                          </a>
                                        </li>
                                        <li className="profile-item">
                                          <a href="#" className="profile-dropdown-link">
                                            <div className="d-flex align-items-center">
                                              <i className="mdi mdi-timer-sand text-success"></i>
                                              <div>
                                                <h5 className="item-title">My Tasks</h5>
                                                <p className="item-detail">latest tasks and projects</p>
                                              </div>
                                            </div>
                                          </a>
                                        </li>
                                        <li className="profile-item">
                                          <a href="#" className="profile-dropdown-link">
                                            <div className="d-flex align-items-center">
                                              <i className="mdi mdi-cash-100 text-warning"></i>
                                              <div>
                                                <h5 className="item-title">Billing</h5>
                                                <p className="item-detail">billing &amp; statements <span className="badge badge-danger ml-2">2 Pending</span></p>
                                              </div>
                                            </div>
                                          </a>
                                        </li>
                                        <li className="profile-item">
                                            <a href="#" className="profile-dropdown-link">
                                              <div className="d-flex align-items-center">
                                                <i className="mdi mdi-power text-dark"></i>
                                                <div>
                                                  <h5 className="item-title mt-0">Logout</h5>
                                                </div>
                                              </div>
                                            </a>
                                          </li>
                                      </ul>
                                    </div>
                                </div>
                              </li>
                            </ul>
                            <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
                              <img src="plugins/images/sidebar/menu.svg" alt="" className=""/>
                            </button>
                          </div>
                        </nav>

                );
            }
}
const mapStateToProps = (state) => {
    return {
        id : state.id 
}
}
export default connect(mapStateToProps)(Header);