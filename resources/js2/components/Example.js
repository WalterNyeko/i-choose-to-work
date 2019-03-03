import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

export default class Example extends Component {
    render() {
        const cats = [1, 2, 3, 4, 5, 6, 7, 8];
        const renderCats = cats.map((cat,index) => <div class="col-xl-3 col-md-6">
                            
                            <a href="#" class="photo-box small" data-background-image="assets/images/job-category-01.jpg">
                                <div class="photo-box-content">
                                    <h3>Web / Software Dev</h3>
                                    <span>612</span>
                                </div>
                            </a>
                        </div>)
        const tasks = [1, 2, 3, 4, 5, 6, 7, 8, 9];

        const renderTask = tasks.map((task) => <a href="single-task-page.html" class="task-listing">

                                        
                                        <div class="task-listing-details">

                                           
                                            <div class="task-listing-description">
                                                <h3 class="task-listing-title">Food Delviery Mobile App</h3>
                                                <ul class="task-icons">
                                                    <li><i class="icon-material-outline-location-on"></i> San Francisco</li>
                                                    <li><i class="icon-material-outline-access-time"></i> 2 minutes ago</li>
                                                </ul>
                                                <div class="task-tags margin-top-15">
                                                    <span>iOS</span>
                                                    <span>Android</span>
                                                    <span>mobile apps</span>
                                                    <span>design</span>
                                                </div>
                                            </div>

                                        </div>

                                        <div class="task-listing-bid">
                                            <div class="task-listing-bid-inner">
                                                <div class="task-offers">
                                                    <strong>$1,000 - $2,500</strong>
                                                    <span>Fixed Price</span>
                                                </div>
                                                <span class="button button-sliding-icon ripple-effect">Bid Now <i class="icon-material-outline-arrow-right-alt"></i></span>
                                            </div>
                                        </div>
                                    </a>)
        return (
            <Fragment>
                <div class="section margin-top-65 margin-bottom-30">
                    <div class="container">
                        <div class="row">

                        
                            <div class="col-xl-12">
                                <div class="section-headline centered margin-top-0 margin-bottom-45">
                                    <h3>Popular Categories</h3>
                                </div>
                            </div>

                            {renderCats}
                            
                        </div>
                    </div>
                </div>
                <div class="section gray margin-top-45 padding-top-65 padding-bottom-75">
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-12">
                                
                                
                                <div class="section-headline margin-top-0 margin-bottom-35">
                                    <h3>Recent Tasks</h3>
                                    <a href="tasks-list-layout-1.html" class="headline-link">Browse All Tasks</a>
                                </div>
                                
                               
                                <div class="tasks-list-container compact-list margin-top-35">
                                   {renderTask}
                                </div>
                                

                            </div>
                        </div>
                    </div>
                </div>  
            </Fragment>
            
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
