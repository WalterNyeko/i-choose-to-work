import React from "react";
import DashboardLayout from "../layout/DashboardLayout";
import OurModal from '../commons/ReusableModal';
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
const DashboardActiveBids = ({ handleInputChange, handleSubmit, state, user}) => {
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
            <li>
              {/*<!-- Job Listing -->*/}
              <div className="job-listing width-adjustment">
                {/*<!-- Job Listing Details -->*/}
                <div className="job-listing-details">
                  {/*<!-- Details -->*/}
                  <div className="job-listing-description">
                    <h3 className="job-listing-title">
                      <a href="#">Pet care</a>
                    </h3>
                  </div>
                </div>
              </div>

              {/*<!-- Task Details -->*/}
              <ul className="dashboard-task-info">
                <li>
                  <strong>UGX4000</strong>
                  <span>Rate</span>
                </li>
                <li>
                  <strong>9/04/2019</strong>
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
                   modalButtonClass="primary text-white icon-feather-edit"
                   handleSubmit={handleSubmit}
                   modalBody={renderModalContent(handleInputChange)} 
                >
                  </OurModal>
                </div>
                <div className="col-md-1">
                <OurModal
                   buttonText="Delete Bid"
                   modalTitle="Delete Bid"
                   submitText="Delete"
                   modalButtonClass="primary text-white icon-feather-edit"
                   modalBody={(
                    <div>
                      <p>Are you sure you want to delete this?</p>
                    </div>
                  )}
                   handleSubmit={handleSubmit}
                >
                  </OurModal>
                </div>

                <div className="col-md-10"></div>
                  
                </div>
              </div>
            </li>
            <li>
              {/*<!-- Job Listing -->*/}
              <div className="job-listing width-adjustment">
                {/*<!-- Job Listing Details -->*/}
                <div className="job-listing-details">
                  {/*<!-- Details -->*/}
                  <div className="job-listing-description">
                    <h3 className="job-listing-title">
                      <a href="#">Build me a website in Angular JS</a>
                    </h3>
                  </div>
                </div>
              </div>

              {/*<!-- Task Details -->*/}
              <ul className="dashboard-task-info">
                <li>
                  <strong>$2,550</strong>
                  <span>Fixed price</span>
                </li>
                <li>
                  <strong>14 Days</strong>
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
                   modalButtonClass="primary text-white icon-feather-edit"
                   handleSubmit={handleSubmit}
                   modalBody={renderModalContent(handleInputChange)} 
                >
                  </OurModal>
                </div>
                <div className="col-md-1">
                <OurModal
                   buttonText="Delete Bid"
                   modalTitle="Delete Bid"
                   submitText="Delete"
                   modalButtonClass="primary text-white icon-feather-edit"
                   modalBody={(
                     <div>
                       <p>Are you sure you want to delete this?</p>
                     </div>
                   )}
                   handleSubmit={handleSubmit}
                >
                  </OurModal>
                </div>

                <div className="col-md-10"></div>
                  
                </div>
              </div>
            </li>
          
          </ul>
        </div>

      </div>

       {/* {renderModalContent(handleInputChange)} */}
          
      </DashboardLayout>
    </div>
  );
};

export default DashboardActiveBids;
