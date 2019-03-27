import React from "react";
import DashboardLayout from "../layout/DashboardLayout";
import StarRatingComponent from 'react-star-rating-component';
import '../../../assets/styles/modal.css';
import { Tabs } from 'antd';
import OurModal from '../commons/ReusableModal';
const TabPane = Tabs.TabPane;



function renderModalContent(title,handleInputChange, rating, onStarClick, body) {
  return (
    <div>
      {/* <!-- Form -->*/}
      <form method="post" id="leave-review-form">
              <div className="feedback-yes-no">
                  <strong>
                      What is the title of the work done?
                  </strong>
                  <div className="mt-4">
                      <input
                          id="title"
                          name="title"
                          type="text"
                          value={title}
                          placeholder="Title of work"
                          onChange={handleInputChange}
                          required
                      />
                  </div>

                  
              </div>

              <div className="feedback-yes-no">
                  <strong>Your Rating</strong>
                  <div className="leave-rating">
                  <StarRatingComponent 
                      name="Your Review" 
                      starCount={5}
                      value={rating}
                      onStarClick={onStarClick}
                  />
                  </div>
                  <div className="clearfix" />
              </div>
              <textarea
                  className="with-border"
                  placeholder="This was my review text"
                  name="body"
                  id="message2"
                  cols="7"
                  value={body}
                  onChange={handleInputChange}
                  required
              >
              {body}
              </textarea>
          </form>
    </div>
  )
}



const DashboardReviews = ({
    handleEditReview, 
    handleInputChange, 
    handleSubmit,
    onStarClick,
    title, 
    body, 
    rating}) => {
  return (
    <div>
      <DashboardLayout>
      <Tabs type="card">
      <TabPane tab="Rate Employers" key="1">
      <div>
          {/**Reviews content start */}

        {/*<!-- Headline -->*/}
        <div className="headline">
          <h3>
            <i className="icon-material-outline-business" /> Rate Employers Services
          </h3>
        </div>

        <div className="content">
          <ul className="dashboard-box-list">
            <li>
              <div className="boxed-list-item">
                {/*<!-- Content -->*/}
                <div className="item-content">
                  <h4>Simple Chrome Extension</h4>
                  <span className="company-not-rated margin-bottom-5">
                    Not Rated
                  </span>
                </div>
              </div>
                <OurModal
                   buttonText="Submit Review"
                   modalTitle="Rate The Service"
                   submitText="Submit"
                   modalButtonClass="primary text-white"
                   handleSubmit={handleSubmit}
                   modalBody={renderModalContent(
                     title,
                     handleInputChange,
                     rating,
                     onStarClick,
                     body
                   )} 
                />
            </li>
            <li>
              <div className="boxed-list-item">
                {/*  <!-- Content -->*/}
                <div className="item-content">
                  <h4>Adsense Expert</h4>
                  <span className="company-not-rated margin-bottom-5">
                    Not Rated
                  </span>
                </div>
              </div>
                    
              <OurModal
                buttonText="Submit Review"
                modalTitle="Rate The Service"
                submitText="Submit"
                modalButtonClass="primary text-white"
                handleSubmit={handleSubmit}
                modalBody={renderModalContent(
                  title,
                  handleInputChange,
                  rating,
                  onStarClick,
                  body
                )} 
                />
            </li>
            <li>
              <div className="boxed-list-item">
                {/* <!-- Content -->*/}
                <div className="item-content">
                  <h4>Fix Python Selenium Code</h4>
                  <div className="item-details margin-top-10">
                    <div className="star-rating" data-rating="5.0" />
                    <div className="detail-item">
                      <i className="icon-material-outline-date-range" />
                      May 2018
                    </div>
                  </div>
                  <div className="item-description">
                    <p>
                      Great clarity in specification and communication. I got
                      payment really fast. Really recommend this employer for
                      his professionalism. I will work for him again with
                      pleasure.
                    </p>
                  </div>
                </div>
              </div>
              <OurModal
                   buttonText="Edit Review"
                   modalTitle="Edit Service Rating"
                   submitText="Save Changes"
                   modalButtonClass="primary text-white"
                   handleSubmit={handleEditReview}
                   modalBody={renderModalContent(
                     title,
                     handleInputChange,
                     rating,
                     onStarClick,
                     body
                   )} 
                />
            </li>
            <li>
              <div className="boxed-list-item">
                {/*<!-- Content -->*/}
                <div className="item-content">
                  <h4>PHP Core Website Fixes</h4>
                  <div className="item-details margin-top-10">
                    <div className="star-rating" data-rating="5.0" />
                    <div className="detail-item">
                      <i className="icon-material-outline-date-range" />
                      May 2018
                    </div>
                  </div>
                  <div className="item-description">
                    <p>
                      Great clarity in specification and communication. I got
                      payment really fast. Really recommend this employer for
                      his professionalism. I will work for him again with
                      pleasure.
                    </p>
                  </div>
                </div>
              </div>
              <OurModal
                 buttonText="Edit Review"
                 modalTitle="Edit Service Rating"
                 submitText="Save Changes"
                 modalButtonClass="primary text-white"
                 handleSubmit={handleEditReview}
                 modalBody={renderModalContent(
                   title,
                   handleInputChange,
                   rating,
                   onStarClick,
                   body
                 )} 
                />
            </li>
          </ul>
        </div>
      </div>
      <div>
      <div>
      </div>
      <div>
      <div>
        </div>
        </div>
        </div>
      
      </TabPane>
      <TabPane tab="Rate Freelancers" key="2">
      <div>
          {/**Reviews content start */}

        {/*<!-- Headline -->*/}
        <div className="headline">
          <h3>
            <i className="icon-material-outline-business" /> Rate Freelancer Services
          </h3>
        </div>

        <div className="content">
          <ul className="dashboard-box-list">
            <li>
              <div className="boxed-list-item">
                {/*<!-- Content -->*/}
                <div className="item-content">
                  <h4>The fact that freelancers can tolerate the hustle, we need to rate them</h4>
                  <span className="company-not-rated margin-bottom-5">
                    Not Rated
                  </span>
                </div>
              </div>
              <OurModal
                 buttonText="Submit Review"
                 modalTitle="Rate The Service"
                 submitText="Submit"
                 modalButtonClass="primary text-white"
                 handleSubmit={handleSubmit}
                 modalBody={renderModalContent(
                   title,
                   handleInputChange,
                   rating,
                   onStarClick,
                   body
                 )} 
                />
            </li>
            <li>
              <div className="boxed-list-item">
                {/*  <!-- Content -->*/}
                <div className="item-content">
                  <h4>Any freelancer here should be rated</h4>
                  <span className="company-not-rated margin-bottom-5">
                    Not Rated
                  </span>
                </div>
              </div>
                    
              <OurModal
                 buttonText="Submit Review"
                 modalTitle="Rate The Service"
                 submitText="Submit"
                 modalButtonClass="primary text-white"
                 handleSubmit={handleSubmit}
                 modalBody={renderModalContent(
                   title,
                   handleInputChange,
                   rating,
                   onStarClick,
                   body
                 )} 
                />
            </li>
            <li>
              <div className="boxed-list-item">
                {/* <!-- Content -->*/}
                <div className="item-content">
                  <h4>Fix Python Selenium Code</h4>
                  <div className="item-details margin-top-10">
                    <div className="star-rating" data-rating="5.0" />
                    <div className="detail-item">
                      <i className="icon-material-outline-date-range" />
                      May 2018
                    </div>
                  </div>
                  <div className="item-description">
                    <p>
                      Great clarity in specification and communication. I got
                      payment really fast. Really recommend this employer for
                      his professionalism. I will work for him again with
                      pleasure.
                    </p>
                  </div>
                </div>
              </div>
              <OurModal
               buttonText="Edit Review"
               modalTitle="Edit Service Rating"
               submitText="Save Changes"
               modalButtonClass="primary text-white"
               handleSubmit={handleEditReview}
               modalBody={renderModalContent(
                 title,
                 handleInputChange,
                 rating,
                 onStarClick,
                 body
               )} 
                />
            </li>
            <li>
              <div className="boxed-list-item">
                {/*<!-- Content -->*/}
                <div className="item-content">
                  <h4>PHP Core Website Fixes</h4>
                  <div className="item-details margin-top-10">
                    <div className="star-rating" data-rating="5.0" />
                    <div className="detail-item">
                      <i className="icon-material-outline-date-range" />
                      May 2018
                    </div>
                  </div>
                  <div className="item-description">
                    <p>
                      Great clarity in specification and communication. I got
                      payment really fast. Really recommend this employer for
                      his professionalism. I will work for him again with
                      pleasure.
                    </p>
                  </div>
                </div>
              </div>
              <OurModal
                 buttonText="Edit Review"
                 modalTitle="Edit Service Rating"
                 submitText="Save Changes"
                 modalButtonClass="primary text-white"
                 handleSubmit={handleEditReview}
                 modalBody={renderModalContent(
                   title,
                   handleInputChange,
                   rating,
                   onStarClick,
                   body
                 )} 
                />
              </li>
            </ul>
          </div>
          </div>
          <div>
          <div>
          </div>
          <div>
          <div>
        </div>
        </div>
        </div>
      </TabPane>
    </Tabs>
        </DashboardLayout>
    </div>
  );
};

export default DashboardReviews;
