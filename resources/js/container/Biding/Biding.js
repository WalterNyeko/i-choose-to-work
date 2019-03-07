import React, { Component } from 'react'
import {connect} from 'react-redux'
import BidingForm from '../../components/Biding/BidingForm';

class Biding extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }

  }

  componentDidMount() {
      const {match: {params}, history} = this.props;

      console.log(params.id);
  }
  
  render() {
    const {match: {params}, history} = this.props;
    return (
      <>
        <BidingForm id={params.id}/>
      </>
    )
  }
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, {})(Biding);
