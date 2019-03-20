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
            loading: false,
            visible: false,
        }
        this.handleInputChange= this.handleInputChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleEditReview=this.handleEditReview.bind(this);
        this.onStarClick=this.onStarClick.bind(this);
        this.showModal = this.showModal.bind(this);
        this.handleCancelModal = this.handleCancelModal.bind(this);
    }

    componentWillMount(){
      this.retrieveEmployersServices();
      this.retrieveFreelancersServices();
    }

    retrieveEmployersServices(){
      const url = Api.MANAGE_TASKS;
      const requestHeader = {
          headers: {
              "content-type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("token")
          },
      }
      return  axios.get(url, requestHeader).then(response => console.log(response))
    }

    retrieveFreelancersServices(){
      const url = Api.MANAGE_TASKS;
      const requestHeader = {
          headers: {
              "content-type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("token")
          },
      }
      return  axios.get(url, requestHeader).then(response => console.log(response))
    }

    handleSubmit(e){
        e.preventDefault();
        this.setState({ loading: true });
      setTimeout(() => {
        this.setState({ loading: false, visible: false });
      }, 3000);
      console.log(this.state, 'submitting review')
      this.setState({
        body: '',
            rating: 0,
            title: '',
            loading: false,
            visible: false,
      })
    }

    handleEditReview(e){
        e.preventDefault();
        this.setState({ loading: true });
      setTimeout(() => {
        this.setState({ loading: false, visible: false });
      }, 3000);
      console.log(this.state, 'editing review')
      this.setState({
        body: '',
            rating: 0,
            title: '',
            loading: false,
            visible: false,
      })

    }

    onStarClick(nextValue, prevValue, name) {
        this.setState({rating: nextValue});
    }

    handleInputChange(e){
        this.setState({[e.target.name]:e.target.value});
        console.log(localStorage.getItem('id'))
        console.log(localStorage.getItem('user').id)
    }

    showModal() {
      this.setState({
        visible: true,
      });
    }
  
    handleCancelModal(){
      this.setState({ visible: false });
    }
  
  

  render() {
    const { visible, loading } = this.state;
    return (
      <React.Fragment>
          <DashboardReviewsComponent
            rating={this.state.rating}
            body={this.state.body}
            handleInputChange={this.handleInputChange}
            handleSubmit={this.handleSubmit}
            handleEditReview={this.handleEditReview}
            title={this.state.title}
            onStarClick={this.onStarClick}
            showModal={this.showModal}
            handleCancelModal={this.handleCancelModal}
            visible={visible}
            loading={loading}/>
      </React.Fragment>
    )
  }
}
export default DashboardReviews;