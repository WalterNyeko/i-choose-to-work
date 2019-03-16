import React, { Component } from 'react'
import {connect} from 'react-redux'
import ServiceSidebar from '../../components/sidebar/servicesSidebar/serviceSidebar';
import {getCategories} from '../../store/actions/categories/categoriesAction'
import {getServices, getServiceCategory, searchServices} from '../../store/actions/services/servicesAction'
import AllServices from '../../components/services/AllServices/allServices';
import Search from '../../components/search';
import SearchFilter from '../../components/search';

class MakeRequest extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       services: []
    }
    this.filterByCat = this.filterByCat.bind(this);
    this.searchServices = this.searchServices.bind(this);
    this.goToRequest = this.goToRequest.bind(this);
    this.showAll = this.showAll.bind(this);
  }

  componentDidMount() {
    this.props.getCategories();
    const {match: {params}, history} = this.props;
    if(!params.id === '')
    {
      this.props.getServiceCategory(params.id)
    }
    else
    {
      this.props.getServices();
    }
    
  }

  showAll()
  {
    this.props.getServices();
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.services)
    {
      this.setState({
        services: nextProps.services
      })
    }
  }

  filterByCat(id)
  {
      this.props.getServiceCategory(id);
  }

  searchServices(value)
  {
    this.props.searchServices(value);
  }
  
  goToRequest(id)
  {
    return this.props.history.push(`/book/${id}`);
  }

  
  render() {
    return (
      <>
        <div class="margin-top-30"></div>
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-4">
                <div class="sidebar-container">
                  <SearchFilter onSearch={(value) => this.searchServices(value)}/>
                  <ServiceSidebar clickedAll={this.showAll} categories={this.props.categories} clicked={(id) => this.filterByCat(id)} search={(value) => this.searchServices(value)}/>
                </div>
              </div>
              <div className="col-md-9">
                <div className="row">
                  <AllServices services={this.state.services} goTo={(id) => this.goToRequest(id)}/>
                </div>
              </div>
            </div>
          </div>
      </>
    )
  }
}
const mapStateToProps = state => ({
  loading: state.categories.loading,
  categories: state.categories.cats,
  errors: state.categories.errors,
  services: state.services.services
})
export default connect(mapStateToProps, {getCategories, getServices, getServiceCategory, searchServices})(MakeRequest)
