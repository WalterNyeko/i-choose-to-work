import React, { Component } from 'react'
import {connect} from 'react-redux'
import ServiceSidebar from '../../components/sidebar/servicesSidebar/serviceSidebar';
import {getCategories} from '../../store/actions/categories/categoriesAction'
import {getReqests, getCateRequests} from '../../store/actions/requestsActions/reqActions'
import RequestList from '../../components/RequestListView';
import SearchFilter from '../../components/search';
import LocationSearch from '../../components/LocationSearch';
import { Select } from 'antd';
import { routes } from '../../constants';

const Option = Select.Option;


class Gigs extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
        requests: [],
        isCat: false,
    }
    this.getCatRequests = this.getCatRequests.bind(this);
    this.goSingle = this.goSingle.bind(this);
    this.bid = this.bid.bind(this);
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
        <div class="margin-top-30"></div>
        <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-4">
            <div class="sidebar-container">
        
              <LocationSearch/>

              <SearchFilter/>

             
              <div class="sidebar-widget">
                <h3>Category</h3>
                <Select
                  showSearch
                  style={{ width: '100%' }}
                  placeholder="Select a category"
                  optionFilterProp="children"
                  // onChange={handleChange}
                  // onFocus={handleFocus}
                  // onBlur={handleBlur}
                  filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                >
                    {this.props.categories.map((cat, i) => 
                                        <option value={cat.id} key={i}>{cat.name}</option>
                    )}
                </Select>
              </div>
            
            </div>
          </div>
          <div className="col-xl-9 col-lg-8 content-left-offset">
            <h3 class="page-title">Search Results</h3>
            
            
              {requestList}
            
          </div>
        </div>
      </div>
      </>
    )
  }
}

const mapStateToProps = state => ({
  categories: state.categories.cats,
  requests: state.makeRequest.requests
})

export default connect(mapStateToProps, {getCategories, getReqests, getCateRequests})(Gigs)
