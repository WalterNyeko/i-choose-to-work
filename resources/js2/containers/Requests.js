import React, { Component, Fragment } from 'react'

import {connect} from 'react-redux';

import CategorySidebar from '../components/Categories/CategorySide/Sidebar';
import ServicesList from '../components/Services/ServicesList/ServicesList';

import {getCategores} from '../actions/categoriesAction';
import {getMoreServices, getServicesCat} from '../actions/servicesAction'

class RequestContainer extends Component {
  constructor(props)
  {
      super(props);
      this.state = {
          page: 1,
          catPage: 1
      }

      this.loadNextServices = this.loadNextServices.bind(this);
      this.loadPrevServices = this.loadPrevServices.bind(this);
      this.getCatServices = this.getCatServices.bind(this);
  }

  componentWillMount()
  {
      this.props.getCategores();
  }

  componentDidMount()
  {
      this.props.getMoreServices(this.state.page);
      this.setState({
          page: this.state.page + 1
      })
  }

  loadNextServices()
  {
      this.props.getMoreServices(this.state.page);
      
      this.setState({
          page: this.state.page + 1
      })
     
  }

  loadPrevServices()
  {
      this.setState({
          page: this.state.page - 1
      })

      this.props.getMoreServices(this.state.page)
  }

  getCatServices(id)
  {
    this.props.getServicesCat(id, this.state.catPage);
    //pagination logic
    console.log(id);
  }

  render() {
    return (
      <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <CategorySidebar categories={this.props.categories} clicked={this.getCatServices} loading={this.props.loadingCats}/> 
                </div>
                <div className="col-md-9">
                    <ServicesList 
                        services={this.props.services} 
                        loading={this.props.loadingServices} 
                        nextclick={this.loadNextServices}
                        prevClick={this.loadPrevServices}
                        firstPage='1'
                        page={this.state.page}
                        lastPage={this.state.lastPage}
                    />
                </div>
            </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    loadingCats: state.serviceCategories.loading,
    categories: state.serviceCategories.items,
    loadingServices: state.services.loading,
    services: state.services.moreItems,
    lastPage: state.services.lastPage,
    currentPage: state.services.currentPage,
})
export default connect(mapStateToProps, {getCategores, getMoreServices, getServicesCat})(RequestContainer)
