import React, { Component } from 'react'
import {connect} from 'react-redux'
import {searchServices} from '../../store/actions/services/servicesAction'

class ServiceSearch extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }

  componentWillMount() {
      const {match: {params}, history} = this.props;
      this.props.searchServices(params.searchKey)
  }
  
  render() {
    return (
      <div>
        
      </div>
    )
  }
}
const mapStateToProps = state => ({
    services: state.services.services,
    loading: state.services.loading,
    errors: state.services.errors,
})
export default connect(mapStateToProps, {searchServices})(ServiceSearch);
