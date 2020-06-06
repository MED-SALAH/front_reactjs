import React from 'react';

import {connect} from 'react-redux'

 class ExperimentEdit extends React.Component {
        constructor(props) {
            super(props);

        }
          
    render (){

        let runid =  this.props.match.params.runid

         return (
                <div className="main-panel">
                    <div className="content-wrapper">
                            Edited run : { runid }
                      </div>
                  </div>
                );
            }
}
const mapStateToProps = (state) => {
    return {
        id : state.id 
}
}
export default connect(mapStateToProps)(ExperimentEdit);