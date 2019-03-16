import React, { Component } from 'react'
import DashboardSidebar from './DashboardSidebar';
import AccountFooter from './AccountFooter';
import {connect} from 'react-redux'

class DashboardLayout extends Component {
  render() {
    return (
      <>
        <div class="dashboard-container">
            <DashboardSidebar/>
            <div class="dashboard-content-container" data-simplebar>
		        <div class="dashboard-content-inner" >
                    {/* <!-- Dashboard Headline --> */}
                    <div class="dashboard-headline">
                        <h3>{this.props.title ? this.props.title : 'Account'}</h3>
                        

                        {/* <!-- Breadcrumbs --> */}
                        <nav id="breadcrumbs" class="dark">
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Dashboard</a></li>
                                <li>{this.props.title ? this.props.title : 'Account'}</li>
                            </ul>
                        </nav>
                    </div>

                    {/* <!-- Row --> */}
                    <div class="row">

                        {/* <!-- Dashboard Box --> */}
                        <div class="col-xl-12">
                            <div class="dashboard-box margin-top-0">
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
