import React, { Component } from 'react'
import {connect} from 'react-redux';

class Home extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
   
  }

  
  
  render() {
    return (
      <div>
        <h3>The home goes here</h3>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  token: state.auth.token
})

export default connect(null, {})(Home);