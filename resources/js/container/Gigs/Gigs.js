import React, { Component } from 'react'
import {connect} from 'react-redux'
import ServiceSidebar from '../../components/sidebar/servicesSidebar/serviceSidebar';
import {getCategories} from '../../store/actions/categories/categoriesAction'
import {getReqests, getCateRequests, searchServiceLocation, searchKey, getRequestService} from '../../store/actions/requestsActions/reqActions'
import RequestList from '../../components/RequestListView';
import SearchFilter from '../../components/search';
import LocationSearch from '../../components/LocationSearch';
import { Select, Spin } from 'antd';
import { routes } from '../../constants';
import {getServices} from '../../store/actions/services/servicesAction'

const Option = Select.Option;


class Gigs extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
        requests: [],
        isCat: false,
    }
    // this.getCatRequests = this.getCatRequests.bind(this);
    this.goSingle = this.goSingle.bind(this);
    this.bid = this.bid.bind(this);
    this.searchByLocation = this.searchByLocation.bind(this);
    this.searchByKey = this.searchByKey.bind(this);
    this.getRequestByService = this.getRequestByService.bind(this);
  }

  componentDidMount() {
    this.props.getServices();
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
  

  getRequestByService(id)
  {
    this.props.getRequestService(id)
  }

  searchByLocation(location)
  {
      this.props.searchServiceLocation(location);
  }

  searchByKey(key)
  {
     this.props.searchKey(key);
  }

  goSingle(id)
  {
    return this.props.history.push(`/view-request/${id}`);
  }

  bid(id)
  {
    return this.props.history.push(`${routes.BIDDING}/${id}`);
  }
  
  
  render() {
    let requestList = null;
    if(this.state.requests.length && this.state.isCat === false)
    {
      requestList = <RequestList goTo={(id) => this.goSingle(id)} isCat="false" bid={(id) => this.bid(id)} requests={this.state.requests} />
    }
    if(this.state.requests.length && this.state.isCat === true)
    {
      requestList = <RequestList isCat="true" requests={this.state.requests} />
    }
    
    return (
      <>
        <div className="margin-top-30"></div>
        <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-4">
            <div className="sidebar-container">
        
              <LocationSearch searchLocation={(location) => this.searchByLocation(location) }/>

              <SearchFilter onSearch={(value) => this.searchByKey(value) }/>

             
              <div className="sidebar-widget">
                <h3>Service</h3>
                <Select
                  showSearch
                  style={{ width: '100%' }}
                  placeholder="Select a service"
                  optionFilterProp="children"
                  onChange={(value) => this.getRequestByService(value)}
                  // onFocus={handleFocus}
                  // onBlur={handleBlur}
                  filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                >
                    {this.props.services.map((service, i) => 
                                        <option value={service.id} key={i}>{service.name}</option>
                    )}
                </Select>
              </div>
            
            </div>
          </div>
          <div className="col-xl-9 col-lg-8 content-left-offset">
            <h3 className="page-title">Search Results</h3>
            
              {this.props.loadingRequests && <Spin size="large"/>}
              {this.state.requests.length ? requestList : <><h2>No search results</h2></>}
            
          </div>
        </div>
      </div>
      </>
    )
  }
}

const mapStateToProps = state => ({
  categories: state.categories.cats,
  requests: state.makeRequest.requests,
  loadingRequests: state.makeRequest.loading,
  services: state.services.services,
  loadingServices: state.services.loading
})

export default connect(mapStateToProps, {getCategories, getReqests, getCateRequests, searchServiceLocation, searchKey, getServices, getRequestService})(Gigs)
