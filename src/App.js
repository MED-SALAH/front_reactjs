import React from 'react';
import './App.css';
import {HashRouter as Router , Switch, Route} from 'react-router-dom';



import Home from './components/Home';

import Header from './components/Header';
import Navigation from './components/Navigation';
import ExperimentList from './components/ExperimentList';
import ExperimentEdit from './components/ExperimentEdit';

import axios from 'axios';

class App extends React.Component {
  /*une methode qui envoie une requéte pour */
  sendEventImpression=(source)=>{
    axios.get(`/analytics?type=impression&source=`+source+`&userId=23&dateEvent=`+new Date().toLocaleString())
      .then(res => {
        console.log(res)
      });
  }

  render(){
  return (
    <Router>
    <div className="container-scroller">

          <Header></Header>

          <div className="container-fluid page-body-wrapper">

             <Navigation></Navigation>

             <Switch >
                  <Route exact path='/' component={Home} />
                  <Route exact path='/index.html' component={Home} />
                  <Route path='/experiments' component={ExperimentList} />
                  <Route path='/experiment/:runid' component={ExperimentEdit} />
             </Switch>

           </div>

    </div>
  </Router>
  );
}
}

export default App;
