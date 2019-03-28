import React, { Component } from 'react';
import DashboardReviewsComponent from '../containers/DashboardReviews';
import { Api } from '../../../constants/Api';

class DashboardReviews extends Component {
    constructor(props){
        super(props);
        this.state = {
            body: '',
            rating: 0,
            title: '',
        }
        this.handleInputChange= this.handleInputChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleEditReview=this.handleEditReview.bind(this);
        this.onStarClick=this.onStarClick.bind(this);
    }

    componentWillMount(){
      this.retrieveEmployersServices();
      this.retrieveFreelancersServices();
    }

    retrieveEmployersServices(){
      const url = Api.EMPLOYERS_REQUESTS;
      const requestHeader = {
          headers: {
              "content-type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("token")
          },
      }
      return  axios.get(url, requestHeader).then(response => console.log(response))
    }

    retrieveFreelancersServices(){
      const url = Api.MY_REQUESTS;
      const requestHeader = {
          headers: {
              "content-type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("token")
          },
      }
      return  axios.get(url, requestHeader).then(response => console.log(response))
    }


    handleSubmit(){
        console.log(this.state, 'submiting review')        
    }

    handleEditReview(){
        console.log(this.state, 'editing review')
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
            handleCloseModal={this.handleCloseModal}
            handleEditReview={this.handleEditReview}
            title={this.state.title}
            onStarClick={this.onStarClick}
            handleModalStateChange={this.handleModalStateChange}
            state={this.state}/>
      </React.Fragment>
    )
  }
}
export default DashboardReviews;