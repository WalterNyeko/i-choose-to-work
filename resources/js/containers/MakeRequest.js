import React, { Component } from 'react';
import {connect} from 'react-redux';
import Request from '../components/Requests/RequestForm/Request';



class MakeRequest extends Component {
  constructor(props)
  {
    super(props)
  }
  
  render() {
    return (
      <div>
        <Request/>
      </div>
    )
  }
}

export default connect(null, {})(MakeRequest)
