import React, {Component} from "react";
import DashboardLayout from "../layout/DashboardLayout";
import { Spin } from "antd";
import {Link} from 'react-router-dom'

class DashboardActiveBids extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       offers: [],
       loading: false,
       errors: []
    }
  }

  componentDidMount() {
    const token = localStorage.getItem('token');
    this.setState({
      loading: true
    })
    axios.get('/api/my-offers', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((res) => {
      this.setState({
        loading: false,
        offers: res.data
      })
    })
    .catch((err) => {
      this.setState({
        errors: err,
        loading: false
      })
    })
  }
  
  
  render()
  {
    let offers = null;
    if(this.state.offers.length)
    {
      offers = this.state.offers.map((offa, index) => 
            <li key={index}>
                {/*<!-- Job Listing -->*/}
                <div class="job-listing width-adjustment">
                  {/*<!-- Job Listing Details -->*/}
                  <div class="job-listing-details">
                    {/*<!-- Details -->*/}
                    <div class="job-listing-description">
                      <h3 class="job-listing-title">
                        <Link to={`/view-request/${offa.id}`}>{offa.sevice_request.description}</Link>
                      </h3>
                    </div>
                  </div>
                </div>

                {/*<!-- Task Details -->*/}
                <ul class="dashboard-task-info">
                  <li>
                    <strong>UGX {offa.estimated_cost}</strong>
                    <span>Rate</span>
                  </li>
                  <li>
                    <strong>{offa.delivery_date}</strong>
                    <span>Delivery Time</span>
                  </li>
                </ul>

                {/*<!-- Buttons -->*/}
                    
           </li>
      );
    }
    else 
    {
      offers = <Spin/>
    }
      return (
          <div>
            <DashboardLayout>
            <div>
              {/**Active content starts */}
              <div class="headline">
                <h3>
                  <i class="icon-material-outline-gavel" /> Bids List
                </h3>
              </div>

              <div class="content">
                <ul class="dashboard-box-list">
                  
                  {offers}
                
                </ul>
              </div>
                  {/**Active content ends */}

            </div>

            
            </DashboardLayout>
          </div>
        );
    }
};

export default DashboardActiveBids;
