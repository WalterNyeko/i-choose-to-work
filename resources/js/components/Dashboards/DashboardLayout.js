import React, { Component } from 'react'
import DashboardSidebar from './layout/DashboardSidebar';
import AccountFooter from './AccountFooter';
import {connect} from 'react-redux'

class DashboardLayout extends Component {
  render() {
    return (
      <>
        <div className="dashboard-container">
            <DashboardSidebar/>
            <div className="dashboard-content-container" data-simplebar>
		        <div className="dashboard-content-inner" >
                    {/* <!-- Dashboard Headline --> */}
                    <div className="dashboard-headline">
                        <h3>{this.props.title ? this.props.title : 'Account'}</h3>
                        

                        {/* <!-- Breadcrumbs --> */}
                        <nav id="breadcrumbs" className="dark">
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Dashboard</a></li>
                                <li>{this.props.title ? this.props.title : 'Account'}</li>
                            </ul>
                        </nav>
                    </div>

                    {/* <!-- Row --> */}
                    <div className="row">

                        {/* <!-- Dashboard Box --> */}
                        <div className="col-xl-12">
                            <div className="dashboard-box margin-top-0">
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
