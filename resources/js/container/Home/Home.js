import React, { Component } from 'react'
import {connect} from 'react-redux';
import HomeHeader from '../../components/home/HomeHeader';
import {getCategories} from '../../store/actions/categories/categoriesAction'
import PopularCategories from '../../components/home/PopularCategories';
import HowItWorks from '../../components/home/HowItWorks';
import CallToAction from '../../components/home/CallToAction';
import Partners from '../../components/home/Partners';
import Footer from '../../components/home/footer';


class Home extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
   
  }

  componentDidMount() {
    this.props.getCategories()
  }

  
  
  render() {
    return (
      <>
        <HomeHeader/>
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
  errors: state.categories.errors
})

export default connect(mapStateToProps, {getCategories})(Home);