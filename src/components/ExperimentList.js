import React from 'react';

import {connect} from 'react-redux'

 class ExperimentList extends React.Component {
        constructor(props) {
            super(props);

            }
          
    render (){
         return (

<div className="main-panel">
        <div className="content-wrapper">
          <div className="row">
            <div className="col-sm-9">
              <div className="row">
                <div className="col-sm-12 pr-0">
                  <div className="d-lg-flex">
                    <h3 className="text-dark font-weight-bold mb-0 mr-5">Trained Models</h3>
                  <ul className="dashboard-link-btn-wrap mt-lg-0 mt-sm-2">
                    <li>
                      <a href="#/experiments" className="text-primary" ><span><i className="mdi mdi-cube-outline"></i></span>Experiments</a>
                    </li>
                    <li>
                      <a href="#/packaged"><span><i className="mdi mdi-signal"></i></span>Packaged</a>
                    </li>
                    <li>
                        <a href="#/deployed" ><span><i className="mdi mdi-file-document-outline"></i></span>Deployed</a>
                      </li>
                    <li>
                      <a href="#/monitoring"><span><i className="mdi mdi-file-document-outline"></i></span>Monitoring</a>
                    </li>
                  </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
                <div className="dropdown float-right">
                  <button className="btn btn-sm bg-white dropdown-toggle font-weight-bold text-dark" type="button" id="dropdownMenuIconButton1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="mdi mdi-calendar mr-1"></i>Filter
                  </button>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuIconButton1">
                    <h6 className="dropdown-header">Advanced filters</h6>
                    <a className="dropdown-item" href="#">By User</a>
                    <a className="dropdown-item" href="#">By Date</a>
                    <a className="dropdown-item" href="#">By Tag</a>
                    <a className="dropdown-item" href="#">By Commit</a>
                    <a className="dropdown-item" href="#">By Run</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Full text search</a>
                  </div>
                </div>
            </div>
          </div>

          <div className="main-panel">
            <div className="content-wrapper">
              <div className="row">

                <div className="col-lg-12 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">10 models only displayed,  use filters</h4>

                      <div className="table-responsive">
                        <table className="table table-striped">
                          <thead>
                          <tr>
                            <th>
                              Id
                            </th>
                            <th>
                              User
                            </th>
                            <th>
                              Date
                            </th>
                            <th>
                              Git
                            </th>

                            <th>
                              Params
                            </th>
                            <th>
                              Metrics
                            </th>

                            <th>
                                Tags
                            </th>
                            <th>

                            </th>
                            <th></th>
                          </tr>
                          </thead>
                          <tbody>
                          <tr>
                            <td >
                              <div>b388fb1d1f17c39813</div>
                            </td>
                            <td>
                              Herman Beck
                            </td>
                            <td>
                              July 1, 2015
                            </td>
                            <td>
                              c0e1ab7362a99b84d6914468221c7c8ec311dfc1
                            </td>

                            <td>
                              <div>
                                <span className="text-primary">Alpha: </span>
                                <span> 0.5</span>
                              </div>

                            </td>

                            <td>
                              <div>
                                <span className="text-primary">RMSE: </span>
                                <span> 0.78</span>
                              </div>
                             <div>
                                 <span className="text-primary">R2: </span>
                                 <span> 0.78</span>
                              </div>
                            </td>

                             <td>
                                <div class="badge badge-primary badge-pill">scoring</div>
                            </td>

                            <td>
                              <a type="button" className="btn btn-info " href="/#/experiment/b388fb1d1f17c39813">Edit</a>

                            </td>
                            <td>
                              <button type="button" className="btn btn-warning">Package</button>
                            </td>
                          </tr>
                          <tr>
                            <td >
                              b388fb1d1f17c39813
                            </td>
                            <td>
                              Bill AOUISSAT
                            </td>
                            <td>
                              July 1, 2015
                            </td>
                            <td>
                              c0e1ab7362a99b84d6914468221c7c8ec311dfc1
                            </td>
                            <td>
                              <div>
                                <span className="text-primary">Alpha: </span>
                                <span> 0.5</span>
                              </div>

                            </td>

                            <td>
                              <div>
                                <span className="text-primary">RMSE: </span>
                                <span> 0.78</span>
                              </div>
                             <div>
                                 <span className="text-primary">R2: </span>
                                 <span> 0.78</span>
                              </div>
                            </td>

                            <td>
                                <div class="badge badge-primary badge-pill">scoring</div>
                            </td>

                            <td>
                              <button type="button" className="btn btn-info">Edit</button>

                            </td>
                            <td>
                              <button type="button" className="btn btn-warning">Package</button>
                            </td>
                          </tr>
                          <tr>
                            <td >
                              b388fb1d1f17c39813
                            </td>
                            <td>
                              John Richards
                            </td>
                            <td>
                              July 1, 2015
                            </td>
                            <td>
                              c0e1ab7362a99b84d6914468221c7c8ec311dfc1
                            </td>
                            <td>
                              <div>
                                <span className="text-primary">Alpha: </span>
                                <span> 0.5</span>
                              </div>

                            </td>

                            <td>
                              <div>
                                <span className="text-primary">RMSE: </span>
                                <span> 0.78</span>
                              </div>
                             <div>
                                 <span className="text-primary">R2: </span>
                                 <span> 0.78</span>
                              </div>
                            </td>


                             <td>
                                <div class="badge badge-primary badge-pill">scoring</div>
                                <div class="badge badge-primary badge-pill">assurance vie</div>
                                <div class="badge badge-primary badge-pill">gdpr</div>
                            </td>

                            <td>
                              <button type="button" className="btn btn-info">Edit</button>

                            </td>
                            <td>
                              <button type="button" className="btn btn-warning">Package</button>
                            </td>
                          </tr>

                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            <footer className="footer">
              <div className="d-sm-flex justify-content-center justify-content-sm-between">
                <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">Copyright © 2018 <a href="https://www.urbanui.com/" target="_blank">Urbanui</a>. All rights reserved.</span>
                <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">Hand-crafted &amp; made with <i className="mdi mdi-heart text-danger"></i></span>
              </div>
            </footer>
          </div>



          <div className="row">
            <div className="col-12 col-sm-6 col-md-6 col-xl-6 grid-margin stretch-card">
              <div className="card">
                <div className="card-body px-0 pb-0 border-bottom">
                  <div className="px-4">
                  <div className="d-flex justify-content-between mb-2">
                      <h4 className="card-title ml-2">Analytics</h4>
                      <div className="mr-2">
                        <button className="btn py-0 text-dark btn-sm">1D</button>
                        <button className="btn py-0 text-dark btn-sm">1W</button>
                        <button className="btn py-0 text-dark btn-sm">1M</button>
                        <button className="btn py-0 pr-0 text-dark btn-sm">1Y</button>
                      </div>
                  </div>
                  </div>
                </div>
                <div className="card-body pt-3">
                  <div>
                    <div className="total-analysis-position">
                        <h6 className="text-dark font-weight-bold mb-2">Total Analytics</h6>
                        <h2 className="text-dark font-weight-bold">$32456.65<span className="text-muted text-extra-small pl-3">10.5% of 20000 Total</span></h2>
                      </div>
                      <div className="flot-chart-container flothcart-container-dashboard">
                        <div id="flotChart" className="flot-chart flot-chart-dashboard"></div>
                      </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-xl-6 grid-margin stretch-card">
              <div className="card">
                <div className="card-body pb-4">
                    <h4 className="card-title">Visitors</h4>
                    <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt,</p>
                    <canvas id="visitors"></canvas>
                </div>
                <div className="card-body p-0 border-top">
                  <div className="px-4 text-center">
                    <div id="chart-visitors-legend" className="chart-visitors-legend">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-sm-6 col-md-6 col-xl-3 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Customers</h4>
                  <p className="text-small">+5.27% Since last month</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <h2 className="text-dark font-weight-bold">43,981<span className="text-muted text-extra-small">/ per month</span></h2>
                    <div className="text-danger font-weight-bold d-flex justify-content-between align-items-center">
                        <i className="mdi mdi-chevron-down mdi-24px"></i> <span className=" text-extra-small">40.8%</span>
                    </div>
                  </div>
                  <canvas id="customer"></canvas>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-xl-3 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Orders</h4>
                  <p className="text-small">-1.08% Since last month</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <h2 className="text-dark font-weight-bold">55,543<span className="text-muted text-extra-small">/ per month</span></h2>
                    <div className="text-success font-weight-bold d-flex justify-content-between align-items-center">
                        <i className="mdi mdi-chevron-up mdi-24px"></i> <span className=" text-extra-small">130.5%</span>
                    </div>
                  </div>
                  <canvas id="orders"></canvas>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-xl-3 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Growth</h4>
                  <p className="text-small">+5.27% Since last month</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <h2 className="text-dark font-weight-bold">58.86%<span className="text-muted text-extra-small">/ per month</span></h2>
                    <div className="text-success font-weight-bold d-flex justify-content-between align-items-center">
                        <i className="mdi mdi-chevron-up mdi-24px"></i> <span className=" text-extra-small">120.3%</span>
                    </div>
                  </div>
                  <canvas id="growth"></canvas>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-xl-3 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Revenue</h4>
                  <p className="text-small"> +7.00% Since last month</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <h2 className="text-dark font-weight-bold">USD 42,9536<span className="text-muted text-extra-small">/ per month</span></h2>
                  </div>
                  <canvas id="revenue"></canvas>
                </div>
              </div>
            </div>
          </div>
          <div className="row flex-grow ">
            <div className="col-lg-12 col-xl-6 grid-margin-md stretch-card flex-column d-flex">
              <div className="row flex-grow">
                <div className="col-sm-12 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body px-0 pb-0 border-bottom">
                      <div className="px-4 pb-3">
                        <h4 className="card-title ml-1">Resources overview</h4>
                      </div>
                    </div>
                    <div className="card-body">
                      <canvas id="resources-overview" className="mt-3"></canvas>
                      <div className="row mt-4">
                        <div className="col-sm-6">
                          <h6 className="text-dark font-weight-bold">ACTIVE RESOURCE</h6>
                          <h3 className="text-dark font-weight-bold">$123,657</h3>
                          <p className="mt-2 text-small">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                          </p>
                        </div>
                        <div className="col-sm-6">
                            <h6 className="text-dark font-weight-bold">INACTIVE RESOURCE</h6>
                            <h3 className="text-dark font-weight-bold">$100,278</h3>
                            <p className="mt-2 text-small">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                            </p>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-sm-7 pr-3">
                          <div className="row">
                            <div className="col-sm-6 pr-3 text-center">
                              <div id="circleProgress1" className="progressbar-js-circle mb-2 mb-lg-0"></div>
                            </div>

                              <div className="col-sm-6 pl-3">
                                  <div id="circleProgress2" className="progressbar-js-circle  mb-2 mb-lg-0"></div>
                              </div>
                          </div>
                        </div>
                        <div className="col-sm-5">
                          <h6 className="text-dark font-weight-bold">Avg. Profit share</h6>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                          <h6 className="text-dark font-weight-bold">Avg. Daily sales</h6>
                          <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>
            <div className="col-lg-12 col-xl-6 grid-margin stretch-card flex-column">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Sales overview</h4>
                  <p>Showing data from March 3 - 30 2019</p>
                  <div className="row mb-2">
                    <div className="col-sm-6">
                      <h6 className="text-dark font-weight-bold mt-2">OVERALL SALES</h6>
                      <div className="d-flex align-items-center">
                        <h2 className="text-dark font-weight-bold mr-1 mb-0">$ 14,000</h2>
                        <div className="text-success text-small d-flex align-items-center">
                          <h6><i className="mdi mdi-chevron-up mdi-24px"></i> <span>30.68%</span></h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <h6 className="text-dark font-weight-bold mt-2">TODAY'S SALES</h6>
                      <div className="d-flex align-items-center">
                        <h2 className="text-dark font-weight-bold mr-1 mb-0">$ 41,160</h2>
                        <div className="text-success text-small  d-flex align-items-center">
                          <h6><i className="mdi mdi-chevron-up mdi-24px"></i> <span>68.22%</span></h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <canvas id="sales-overview"></canvas>
                  <div className="table-responsive">
                    <table className="table">
                        <thead>
                          <tr>
                            <th>Users</th>
                            <th>Status</th>
                            <th>Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <div className="d-flex align-items-center">
                                <img src="images/faces/face29.png" alt=""/>
                                <div className="ml-3">
                                    <div className="font-weight-bold  text-dark mb-1">Benjamin Rodriguez</div><div className="font-weight-medium">bria_morissette@gmail.com</div>
                                </div>

                              </div>
                            </td>
                            <td><span className="badge badge-opacity-success">completed</span></td>
                            <td><div className="font-weight-bold  text-dark mb-1">1,12,900</div><div className="font-weight-medium">Earning</div></td>
                          </tr>
                          <tr>
                            <td>
                              <div className="d-flex align-items-center">
                                <img src="images/faces/face30.png" alt=""/>
                                <div className="ml-3">
                                    <div className="font-weight-bold  text-dark mb-1">Franklin Williams</div><div className="font-weight-medium">franklinwilliams@gmail.com</div>
                                </div>

                              </div>
                            </td>
                            <td><span className="badge badge-opacity-success">completed</span></td>
                            <td><div className="font-weight-bold  text-dark mb-1">6,00,00</div><div className="font-weight-medium">Earning</div></td>
                          </tr>
                          <tr>
                            <td>
                              <div className="d-flex align-items-center">
                                <img src="images/faces/face31.png" alt=""/>
                                <div className="ml-3">
                                    <div className="font-weight-bold  text-dark mb-1">Jordan Fox</div><div className="font-weight-medium">jordanfox@gmail.com</div>
                                </div>

                              </div>
                            </td>
                            <td><span className="badge badge-opacity-primary">Pending</span></td>
                            <td><div className="font-weight-bold  text-dark mb-1">3,42,230</div><div className="font-weight-medium">Earning</div></td>
                          </tr>

                        </tbody>
                      </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-sm-6 col-md-6 col-xl-4 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">App Categories</h4>

                  <div className="app-categories-legend mt-4">
                    <div className="d-flex justify-content-between legend-label align-items-center">
                      <div className="d-flex"><span className="bg-danger"></span>News</div>
                      <div>25% 34m</div>
                    </div>
                    <div className="d-flex justify-content-between legend-label align-items-center">
                      <div className="d-flex"><span className="bg-info"></span>Social Media</div>
                      <div>16% 15m</div>
                    </div>
                    <div className="d-flex justify-content-between legend-label align-items-center">
                      <div className="d-flex"><span className="bg-primary"></span>Email</div>
                      <div>10% 27m</div>
                    </div>
                    <div className="d-flex justify-content-between legend-label align-items-center">
                      <div className="d-flex"><span className="bg-warning"></span>Entertainment</div>
                      <div>25% 56m</div>
                    </div>
                    <div className="d-flex justify-content-between legend-label align-items-center">
                      <div className="d-flex"><span className="bg-success"></span>Apps</div>
                      <div>12% 12m</div>
                    </div>
                    <div className="d-flex justify-content-between legend-label align-items-center pb-0">
                        <div className="d-flex"><span className="bg-dark"></span>Apps</div>
                        <div>12% 12m</div>
                      </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-xl-4 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Notifications & Update</h4>
                  <div className="mt-4">
                    <div className="mb-3">
                      <span className="badge badge-opacity-primary mb-2">Tomorrow</span>
                      <h6 className="text-dark font-weight-bold">Glen Hines</h6>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                    </div>
                    <div className="mb-3">
                      <span className="badge badge-opacity-primary mb-2">Monday</span>
                      <h6 className="text-dark font-weight-bold">Nannie Rodgers</h6>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                    </div>
                    <div className="mb-3">
                      <span className="badge badge-opacity-primary mb-2">Saturday</span>
                      <h6 className="text-dark font-weight-bold">Susie Mullins</h6>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                    </div>

                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-xl-4 grid-margin stretch-card">
              <div className="card">
                <div className="card-body px-0 border-bottom">
                  <div className="px-4">
                    <div className="d-flex align-items-center justify-content-between">
                        <h4 className="card-title ml-1 mb-0">Transaction History</h4>
                        <h6 className="mr-1 mb-0"><a href="#" className="text-primary">Show All</a></h6>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="transaction-history-item">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center">
                        <div className="transaction-history-brand transaction-history-brand-success">H</div>
                        <h6 className="text-dark">HSBC</h6>
                      </div>
                      <div className="d-flex align-items-center">
                        <i className="mdi mdi-arrow-top-left text-success mr-1"></i>
                        <h6 className="text-dark font-weight-bold">$ 14,000</h6>
                      </div>
                    </div>
                  </div>
                  <div className="transaction-history-item">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center">
                        <div className="transaction-history-brand transaction-history-brand-warning">G</div>
                        <h6 className="text-dark">G4S</h6>
                      </div>
                      <div className="d-flex align-items-center">
                        <i className="mdi mdi-arrow-bottom-right text-danger mr-1"></i>
                        <h6 className="text-dark font-weight-bold">$ 34,000</h6>
                      </div>
                    </div>
                  </div>
                  <div className="transaction-history-item">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center">
                        <div className="transaction-history-brand transaction-history-brand-primary">J</div>
                        <h6 className="text-dark">John Lewis & Partners</h6>
                      </div>
                      <div className="d-flex align-items-center">
                        <i className="mdi mdi-arrow-top-left text-success mr-1"></i>
                        <h6 className="text-dark font-weight-bold">$ 23,000</h6>
                      </div>
                    </div>
                  </div>
                  <div className="transaction-history-item">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center">
                        <div className="transaction-history-brand transaction-history-brand-danger">J</div>
                        <h6 className="text-dark">Clarks</h6>
                      </div>
                      <div className="d-flex align-items-center">
                        <i className="mdi mdi-arrow-bottom-right text-danger mr-1"></i>
                        <h6 className="text-dark font-weight-bold">$ 65,000</h6>
                      </div>
                    </div>
                  </div>
                  <div className="transaction-history-item">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center">
                        <div className="transaction-history-brand transaction-history-brand-primary">J</div>
                        <h6 className="text-dark">Lush Cosmetics</h6>
                      </div>
                      <div className="d-flex align-items-center">
                        <i className="mdi mdi-arrow-top-left text-success mr-1"></i>
                        <h6 className="text-dark font-weight-bold">$ 77,000</h6>
                      </div>
                    </div>
                  </div>
                  <div className="transaction-history-item">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <div className="transaction-history-brand transaction-history-brand-danger">J</div>
                          <h6 className="text-dark">Lush Cosmetics</h6>
                        </div>
                        <div className="d-flex align-items-center">
                          <i className="mdi mdi-arrow-bottom-right text-danger mr-1"></i>
                          <h6 className="text-dark font-weight-bold">$ 77,000</h6>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
              <div className="col-12 col-sm-12 col-md-12 col-xl-4 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body px-0 pb-0 border-bottom">
                    <div className="px-4">
                    <div className="d-flex justify-content-between mb-2">
                        <h4 className="card-title ml-2">Calender</h4>
                        <h6><a href="pages/apps/calendar.html" className="text-primary">Go to Calender</a></h6>
                      </div>
                    </div>
                  </div>
                  <div className="card-body px-0 pt-1 border-bottom">
                    <div className="px-4">
                      <div id="inline-datepicker-dashboard" className="datepicker inline-datepicker-dashboard"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-xl-4 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center text-dark">
                      <h1>$234/m.</h1>
                      <button type="button" className="btn btn-inverse-primary btn-sm">New</button>
                    </div>
                    <h3 className="text-dark">For Business Plans</h3>
                    <p className="border-bottom text-dark pb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                    <div>
                      <div className="d-flex justify-content-between align-items-center py-2">
                        <h6 className="text-dark">Storage capacity</h6>
                        <h6 className="font-weight-medium text-dark">650GB</h6>
                      </div>
                      <div className="d-flex justify-content-between align-items-center py-2">
                        <h6 className="text-dark">Online support</h6>
                        <h6 className="font-weight-medium text-dark">24/7</h6>
                      </div>
                      <div className="d-flex justify-content-between align-items-center py-2">
                        <h6 className="text-dark">Daily Updates</h6>
                        <h6 className="font-weight-medium text-dark">Unlimited</h6>
                      </div>
                      <div className="d-flex justify-content-between align-items-center py-2">
                        <h6 className="font-weight-bold text-dark">Visitors Monitoring</h6>
                        <h6 className="font-weight-medium text-dark">342</h6>
                      </div>
                      <div className="d-flex justify-content-between align-items-center py-2">
                        <h6 className="text-dark">Email Account</h6>
                        <h6 className="font-weight-medium text-dark">Free</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-xl-4 grid-margin stretch-card">
                  <div className="card">
                      <div className="card-body px-0 pb-0 border-bottom">
                        <div className="px-4 pb-3">
                            <div className="d-flex justify-content-between align-items-center text-dark">
                                <div className="d-flex align-items-center">
                                    <h6 className="mb-0 ml-1">Login</h6>
                                    <p className="mb-0 ml-2">welcome back</p>
                                </div>
                                <a href="pages/samples/register.html" className="btn btn-link text-primary font-weight-bold mr-1 p-0">Sign up</a>

                              </div>
                        </div>
                      </div>
                      <div className="card-body px-0 pt-1 border-bottom">
                        <div className="px-4">
                            <form className="dashboard-login mt-2">
                              <div className="form-group">
                                <label htmlFor="Login" className=" text-dark text-small">Your login or email</label>
                                <input type="email" className="form-control" id="Login" placeholder="Login"/>
                              </div>
                              <div className="form-group">
                                <label htmlFor="pwd" className=" text-dark text-small">Your Password:</label>
                                <input type="password" className="form-control" id="pwd" placeholder="Your Password"/>
                              </div>
                              <div className="form-group form-check">
                                <label className="form-check-label">
                                  <input className="form-check-input" type="checkbox"/> Remember me
                                </label>
                              </div>
                              <button type="submit" className="btn btn-primary btn-md btn-block mb-2">Login</button>
                                  <a href="#" className="auth-link text-small" >Forgot password?</a>
                            </form>

                        </div>
                      </div>
                    </div>
              </div>
          </div>
        </div>
        <footer className="footer">
          <div className="d-sm-flex justify-content-center justify-content-sm-between">
            <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">Copyright © 2018 <a href="https://www.urbanui.com/" target="_blank">Urbanui</a>. All rights reserved.</span>
            <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">Hand-crafted & made with <i className="mdi mdi-heart text-danger"></i></span>
          </div>
        </footer>
      </div>
                );
            }
}
const mapStateToProps = (state) => {
    return {
        id : state.id 
}
}
export default connect(mapStateToProps)(ExperimentList);