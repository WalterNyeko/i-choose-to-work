import React, { Component } from 'react'
import {connect} from 'react-redux';
import HomeHeader from '../../components/home/HomeHeader';
import {getCategories} from '../../store/actions/categories/categoriesAction'
import PopularCategories from '../../components/home/PopularCategories';
import HowItWorks from '../../components/home/HowItWorks';
import CallToAction from '../../components/home/CallToAction';
import Partners from '../../components/home/Partners';
import Footer from '../../components/home/footer';
import {searchServices, getServices} from '../../store/actions/services/servicesAction'
import { routes } from '../../constants';


class Home extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
        searchkey: '',
        services: []
    }
    this.onChange = this.onChange.bind(this);
    // this.onSubmit = this.onSubmit.bind(this);
   
  }
  

  componentDidMount() {
    this.props.getCategories();
    this.props.getServices();
  }

  componentWillReceiveProps(nextProps) {
      if (nextProps.services) {
          nextProps.services.map((serv) => this.setState(prev => ({
              services: [...prev.services, serv.name]
          })))
      }
  }

  onChange(value) {
      console.log(value)
      this.setState({
          searchkey: value
      })
  }

  
  render() {
    const dataSourc = this.state.services;
    return (
      <>
        <HomeHeader dataSource={dataSourc} onChange={this.onChange} onSubmit={() => this.props.history.push(routes.REQUEST)}/>
        <PopularCategories categories={this.props.categories}/>
        <CallToAction/>
        <HowItWorks/>
        <Partners/>
        <Footer/>
      </>
    )
  }
}
const mapStateToProps = state => ({
  token: state.auth.token,
  categories: state.categories.cats,
  loading: state.categories.loading,
  errors: state.categories.errors,
  services: state.services.services,
})

export default connect(mapStateToProps, {getCategories, getServices})(Home);