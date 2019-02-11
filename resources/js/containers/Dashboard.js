import React, { Component } from 'react'
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

class Dashboard extends Component {
  render() {
    return (
      <div className="container"> 
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <div class="card" style={card}>
                        <div class="card-body">
                            <h5 class="card-title">Profile</h5>
                            <p class="card-text">Complete Profile to get more gigs.</p>
                            <a href="#" class="btn btn-primary">Profile</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div class="card" style={card}>
                        <div class="card-body">
                            <h5 class="card-title">My Jobs</h5>
                            <p class="card-text">View gig(s) you have done.</p>
                            <a href="#" class="btn btn-primary">View Jobs</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div class="card" style={card}>
                        <div class="card-body">
                            <h5 class="card-title">My ofers</h5>
                            <p class="card-text">View gigs applied for.</p>
                            <a href="#" class="btn btn-primary">View Offers</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row" style={stats}>
                <div className="col-md-6">
                    <h4>Recent Jobs</h4>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Job</li>
                    </ul>
                </div>
                <div className="col-md-6">
                    <h4>Recent Requests</h4>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Request</li>
                    </ul>
                </div>
            </div>
      </div>
    )
  }
}
const card = {
    width: 18 + 'rem'
}

const stats = {
    marginTop: 5 + 'rem'
}
const mapStateToProps = state => ({
    isProvider: state.auth.isProvider
})


export default withRouter(connect(mapStateToProps, {})(Dashboard))
