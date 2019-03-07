import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getSingleRequest} from '../../store/actions/requestsActions/reqActions';
import SingleRequestCustomer from './SingleRequestCustomer';
import RequestContent from './RequestContent';
import { routes } from '../../constants';

class SingleRequest extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       requests: {}
    }
    this.bid = this.bid.bind(this);
  }
   componentWillMount() {
       const { match: { params }, history } = this.props

       this.props.getSingleRequest(params.id);

   }

   componentWillReceiveProps(nextProps) {
       if(nextProps.request)
       {
           this.setState({
               request: nextProps.request
           })
           console.log(this.state.request)
       }
   }

   bid(id)
  {
    return this.props.history.push(`${routes.BIDDING}/${id}`);
  }
   
  
  render() {
    const request = this.state.request
    return (
      <>
        <SingleRequestCustomer customer={this.props.customer.name} address={this.props.request.address} title={this.props.service.name}/>
        <RequestContent description={this.props.request.description} bid={(id) => this.bid(this.props.request.id)} created_at={this.props.request.created_at}/>
      </>
    )
  }
}

const mapStateToProps = state => ({
    request: state.makeRequest.request,
    service: state.makeRequest.service,
    customer: state.makeRequest.customer,
    errors: state.makeRequest.errors,
    loadingRequest: state.makeRequest.loading
})

export default connect(mapStateToProps, {getSingleRequest})(SingleRequest)
