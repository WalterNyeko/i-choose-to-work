import React, { Component } from 'react'
import {connect} from 'react-redux';
import {searchServices, getServices} from '../../store/actions/services/servicesAction'
import { AutoComplete } from 'antd';
import {withRouter} from 'react-router-dom'
import { routes } from '../../constants';


class HomeHeader extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       searchkey: '',
       services: []
    }
    
  }
  
  render() {
    return (
      <>
        <div className="intro-banner" data-background-image={require('../../assets/carpenter.jpg')}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="banner-headline">
                            <h3>
                                <strong>Hire experts or be hired for any job, any time.</strong>
                                <br/>
                                <span>Thousands of people use <strong className="color">Ichuzz2work</strong> to get things done.</span>
                            </h3>
                        </div>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-md-12">
                        <div className="intro-banner-search-form margin-top-95">

                            <div className="intro-search-field">
                                <label for ="intro-keywords" className="field-title ripple-effect">What you need done?</label>
                                <input id="intro-keywords"  type="text" placeholder="e.g. plumbing" />
                                {/* <AutoComplete
                                    style={{ width: '100%' }}
                                    dataSource={this.props.dataSource}
                                    onSelect={this.props.onChange}
                                    placeholder="eg plumbing"
                                    // filterOption={(inputValue, option) => option.props.children.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1}
                                /> */}
                            </div>
                            
                            <div className="intro-search-button">
                                <button className="button ripple-effect" onClick={this.props.onSubmit}>Search</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <ul className="intro-stats margin-top-45 hide-under-992px">
                            <li>
                                <strong className="counter">3,543</strong>
                                <span>Tasks Posted</span>
                            </li>
                            <li>
                                <strong className="counter">1,232</strong>
                                <span>Taskers</span>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
      </>
    )
  }
}

const mapStateToProps = state => ({
    services: state.services.services,
    loading: state.services.loading,
    errors: state.services.errors,
})

export default connect(mapStateToProps, {})(HomeHeader)
