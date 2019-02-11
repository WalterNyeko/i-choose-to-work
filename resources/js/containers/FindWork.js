import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import AllRequestsComponent from '../components/AllRequests';

class FindWork extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
            <AllRequestsComponent/>
        </div>
      </div>
    )
  }
}

export default withRouter(connect(null, {})(FindWork));
