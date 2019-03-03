import React, { Component } from 'react'
import {connect} from 'react-redux'
import ServiceSidebar from '../../components/sidebar/servicesSidebar/serviceSidebar';
import {getCategories} from '../../store/actions/categories/categoriesAction'
import {getReqests, getCateRequests} from '../../store/actions/requestsActions/reqActions'
import RequestList from '../../components/RequestListView';

class Gigs extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
        requests: [],
        isCat: false,
    }
    this.getCatRequests = this.getCatRequests.bind(this);
  }

  componentDidMount() {
    this.props.getCategories();
    this.props.getReqests();
  }
  
  componentWillReceiveProps(nextProps) {
    if(nextProps.requests)
    {
      this.setState({
        requests: nextProps.requests
      })
    }
  }

  getCatRequests(id)
  {
    this.setState({
      isCat: true
    })
    this.props.getCateRequests(id);
    this.setState({
      requests: this.props.requests
    })
    console.log(this.state.requests)
  }
  
  
  render() {
    let requestList = null;
    if(this.state.requests.length && this.state.isCat === false)
    {
      requestList = <RequestList isCat="false" requests={this.state.requests} />
    }
    if(this.state.requests.length && this.state.isCat === true)
    {
      requestList = <RequestList isCat="true" requests={this.state.requests} />
    }
    
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <ServiceSidebar categories={this.props.categories} clicked={(id) => this.getCatRequests(id)}/>
          </div>
          <div className="col-md-9">
            <div className="row">
              {requestList}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  categories: state.categories.cats,
  requests: state.makeRequest.requests
})

export default connect(mapStateToProps, {getCategories, getReqests, getCateRequests})(Gigs)
