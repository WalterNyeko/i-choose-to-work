import React, { Component } from 'react'
import {connect} from 'react-redux'
import ServiceSidebar from '../../components/sidebar/servicesSidebar/serviceSidebar';
import {getCategories} from '../../store/actions/categories/categoriesAction'
import {getServices, getServiceCategory} from '../../store/actions/services/servicesAction'
import AllServices from '../../components/services/AllServices/allServices';

class MakeRequest extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       services: []
    }
    this.filterByCat = this.filterByCat.bind(this);
    this.searchServices = this.searchServices.bind(this);
    this.goToRequest = this.goToRequest.bind(this);
  }

  componentDidMount() {
    this.props.getCategories();
    this.props.getServices();
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.services)
    {
      this.setState({
        services: nextProps.services
      })
      console.log(this.state.services)
    }
  }

  filterByCat(id)
  {
      this.props.getServiceCategory(id);
  }

  searchServices(value)
  {
    this.state.services.filter(service => {
      // const lc = service.toLowerCase();
      const filter = value.toLowerCase();
      return service.includes(filter);
    })
    console.log(this.state.services);
  }
  
  goToRequest(id)
  {
    return this.props.history.push(`/book/${id}`);
  }

  
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <ServiceSidebar categories={this.props.categories} clicked={(id) => this.filterByCat(id)} search={(value) => this.searchServices(value)}/>
          </div>
          <div className="col-md-9">
            <div className="row">
              <AllServices services={this.state.services} goTo={(id) => this.goToRequest(id)}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  loading: state.categories.loading,
  categories: state.categories.cats,
  errors: state.categories.errors,
  services: state.services.services
})
export default connect(mapStateToProps, {getCategories, getServices, getServiceCategory})(MakeRequest)
