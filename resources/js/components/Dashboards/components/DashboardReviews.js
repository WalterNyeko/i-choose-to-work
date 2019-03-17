import React, { Component } from 'react';
import DashboardReviewsComponent from '../containers/DashboardReviews';

class DashboardReviews extends Component {
    constructor(props){
        super(props);
        this.state = {
            body: '',
            rating: 0,
            title: ''
        }
        this.handleInputChange= this.handleInputChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleEditReview=this.handleEditReview.bind(this);
        this.onStarClick=this.onStarClick.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        console.log(this.state, 'submitting review');
    }

    handleEditReview(e){
        e.preventDefault();
        console.log(this.state, 'editing review');
    }

    onStarClick(nextValue, prevValue, name) {
        this.setState({rating: nextValue});
    }

    handleInputChange(e){
        this.setState({[e.target.name]:e.target.value});
    }

  render() {
    return (
      <React.Fragment>
          <DashboardReviewsComponent
            rating={this.state.rating}
            body={this.state.body}
            handleInputChange={this.handleInputChange}
            handleSubmit={this.handleSubmit}
            handleEditReview={this.handleEditReview}
            title={this.state.title}
            onStarClick={this.onStarClick}/>
      </React.Fragment>
    )
  }
}
export default DashboardReviews;