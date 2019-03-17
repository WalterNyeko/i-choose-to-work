import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

const EditReviewModal = (props) => {
  return (
    <React.Fragment>
        {/*<!-- Edit Review Popup
================================================== -->*/}
                <div
                    id="small-dialog-1"
                    class="zoom-anim-dialog mfp-hide dialog-with-tabs"
                >
                    {/*<!--Tabs -->*/}
                    <div class="sign-in-form">
                        <ul class="popup-tabs-nav" />
                        <div class="popup-tabs-container">

                            {/* <!-- Tab -->*/}
                            <div class="popup-tab-content" id="tab1">
                                {/*<!-- Welcome Text -->*/}
                                <div class="welcome-text">
                                    <h3>Change Review</h3>
                                    <span>
                                        Rate <a href="#">Herman Ewout</a> for
                                        the project
                                        <a href="#">
                                            WordPress Theme Installation
                                        </a>
                                    </span>
                                </div>
                                {/* <!-- Form -->*/}
                                <form method="post" id="leave-review-form">
                                    <div class="feedback-yes-no">
                                        <strong>
                                            What is the title of the work done?
                                        </strong>
                                        <div class="mt-4">
                                            <input
                                                id="title"
                                                name="title"
                                                type="text"
                                                value={props.title}
                                                placeholder="Title of work"
                                                onChange={props.handleInputChange}
                                                required
                                            />
                                        </div>

                                        
                                    </div>

                                    <div class="feedback-yes-no">
                                        <strong>Your Rating</strong>
                                        <div class="leave-rating">
                                        <StarRatingComponent 
                                            name="Your Review" 
                                            starCount={5}
                                            value={props.rating}
                                            onStarClick={props.onStarClick}
                                        />
                                        </div>
                                        <div class="clearfix" />
                                    </div>
                                    <textarea
                                        class="with-border"
                                        placeholder="This was my review text"
                                        name="body"
                                        id="message2"
                                        cols="7"
                                        value={props.body}
                                        onChange={props.handleInputChange}
                                        required
                                    >
                                    {props.body}
                                    </textarea>
                                </form>

                                {/*  <!-- Button -->*/}
                                <button
                                    class="button full-width button-sliding-icon ripple-effect"
                                    type="submit"
                                    form="change-review-form"
                                    onClick={props.handleEditReview}
                                >
                                    Save Changes{" "}
                                    <i class="icon-material-outline-arrow-right-alt" />
                                </button>
                               
                            </div>
                        </div>
                    </div>
                </div>

    </React.Fragment>
  )
}
export default EditReviewModal;