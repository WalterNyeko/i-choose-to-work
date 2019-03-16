import React, { Component } from 'react'
import DashboardSidebar from './DashboardSidebar';
import AccountFooter from './AccountFooter';
import {connect} from 'react-redux'

class DashboardLayout extends Component {
  render() {
    return (
      <>
<<<<<<< HEAD
        <div className="dashboard-container">
            <DashboardSidebar/>
            <div className="dashboard-content-container" data-simplebar>
		        <div className="dashboard-content-inner" >
                    {/* <!-- Dashboard Headline --> */}
                    <div className="dashboard-headline">
=======
        <div class="dashboard-container">
            <DashboardSidebar/>
            <div class="dashboard-content-container" data-simplebar>
		        <div class="dashboard-content-inner" >
                    {/* <!-- Dashboard Headline --> */}
                    <div class="dashboard-headline">
>>>>>>> e5e9e2d46eb73ddaef82cf2d5d3c768bdeb01ad5
                        <h3>{this.props.title ? this.props.title : 'Account'}</h3>
                        

                        {/* <!-- Breadcrumbs --> */}
<<<<<<< HEAD
                        <nav id="breadcrumbs" className="dark">
=======
                        <nav id="breadcrumbs" class="dark">
>>>>>>> e5e9e2d46eb73ddaef82cf2d5d3c768bdeb01ad5
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Dashboard</a></li>
                                <li>{this.props.title ? this.props.title : 'Account'}</li>
                            </ul>
                        </nav>
                    </div>

                    {/* <!-- Row --> */}
<<<<<<< HEAD
                    <div className="row">

                        {/* <!-- Dashboard Box --> */}
                        <div className="col-xl-12">
                            <div className="dashboard-box margin-top-0">
=======
                    <div class="row">

                        {/* <!-- Dashboard Box --> */}
                        <div class="col-xl-12">
                            <div class="dashboard-box margin-top-0">
>>>>>>> e5e9e2d46eb73ddaef82cf2d5d3c768bdeb01ad5
                                {this.props.children}
                            </div>
                        </div>
                    </div>
                    <AccountFooter/>
                </div>
            </div>
        </div>
      </>
    )
  }
}

const mapStateToprops = state => ({
    role: state.auth.role
})

export default connect(mapStateToprops, {})(DashboardLayout)
