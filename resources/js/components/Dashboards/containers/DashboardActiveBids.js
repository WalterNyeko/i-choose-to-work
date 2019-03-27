import React, { Component } from "react";
import DashboardLayout from "../layout/DashboardLayout";
import OurModal from '../commons/ReusableModal';
import { Spin } from "antd";
import { Link } from 'react-router-dom';

const renderModalContent = (handleInputChange) => {
  return (
    <div>
        <span className="bidding-detail">
          Set your <strong>minimal hourly rate</strong>
        </span>
            <input
              className="bidding-slider"
              type="text"
              value=""
              onChange={handleInputChange}
            />
              <span className="bidding-detail margin-top-30">
                Set your <strong>delivery time</strong>
              </span>
                  <input 
                    type="text" 
                    name="qtyInput" 
                    value="2"
                    onChange={handleInputChange} 
                  />
                  <div className="">
                  <span className="bidding-detail margin-top-30">
                    Set your <strong>delivery time format</strong>
                  </span>
                    <select className="default with-border">
                      <option >Days</option>
                      <option>Hours</option>
                    </select>
                  </div>
          </div>
  )
}

class DashboardActiveBids extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       offers: [],
       loading: false,
       errors: []
    }
  }

  componentWillMount() {
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
                <div className="job-listing width-adjustment">
                  {/*<!-- Job Listing Details -->*/}
                  <div className="job-listing-details">
                    {/*<!-- Details -->*/}
                    <div className="job-listing-description">
                      <h3 className="job-listing-title">
                        <Link to={`/view-request/${offa.id}`}>{offa.sevice_request.description}</Link>
                      </h3>
                    </div>
                  </div>
                </div>

                {/*<!-- Task Details -->*/}
                <ul className="dashboard-task-info">
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

                <div className="buttons-to-right always-visible">
              <div className="row">
                <div className="col-md-1">
                <OurModal
                   buttonText="Edit Bid"
                   modalTitle="Edit Bid"
                   submitText="Save Changes"
                   modalButtonclassName="primary text-white icon-feather-edit"
                   handleSubmit={this.props.handleSubmit}
                   modalBody={renderModalContent(this.props.handleInputChange)} 
                >
                  </OurModal>
                </div>
                <div className="col-md-1">
                <OurModal
                   buttonText="Delete Bid"
                   modalTitle="Delete Bid"
                   submitText="Delete"
                   modalButtonclassName="primary text-white icon-feather-edit"
                   modalBody={(
                     <div>
                       <p>Are you sure you want to delete this?</p>
                     </div>
                   )}
                   handleSubmit={this.props.handleSubmit}
                >
                  </OurModal>
                </div>

                <div className="col-md-10"></div>
                  
                </div>
              </div>
                    
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
              <div className="headline">
                <h3>
                  <i className="icon-material-outline-gavel" /> Bids List
                </h3>
              </div>

              <div className="content">
                <ul className="dashboard-box-list">
                  
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